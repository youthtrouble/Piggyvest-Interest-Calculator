package main

import (
	"fmt"
	"html/template"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	"github.com/youthtrouble/Interest-Calculator/calculator"
)

var (
	//Fs serves static files on the server
	fs = http.FileServer(http.Dir("./templates/css/"))
	js = http.FileServer(http.Dir("./templates/js/"))
	//Fimg servers image files on the server
	//Fimg serves images to the server
	fimg = http.FileServer(http.Dir("./templates/img/"))

	tpl   *template.Template
	tmpl  = template.New("")
	port string
)

func init() {
	// Get serve port from environment
	// Allows for easy port change
	port = os.Getenv("EMS_PORT")
	//Default to 9000
	if port == "" {
		port = "9000"
	}
	// Parses gohtml files in templates directory
	tmpl = template.Must(template.ParseGlob("templates/*.gohtml"))
	tpl = template.Must(template.ParseGlob("templates/*.html"))
}

func main() {
	// Register routers
	router := mux.NewRouter()
	router.HandleFunc("/", calculator.Savecalc).Methods("GET", "POST")
	//localhost can be omitted
	fmt.Printf("Serving on port %s...\n", port)
	http.ListenAndServe(":"+port, router)
}
