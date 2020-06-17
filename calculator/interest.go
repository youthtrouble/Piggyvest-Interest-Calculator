package calculator

import (
	"fmt"
	"math"
	"strconv"
)

// Plan describes a savings plan
type Plan struct {
	Name      string `json:"name"`
	Principal string `json:"principal"`
	Period    string `json:"period"`
}

const yr = 365

// Calculate the interest based on the plan type
func Calculate(plan Plan) (tot, intrst float32) {
	var total, interest float64
	switch plan.Name {
	case "piggybank", "target", "flex":
		var rate float64 = 0.1
		total, interest = ci(plan.Principal, plan.Period, rate)
	case "safelock":
		total, interest = si(plan.Principal, plan.Period)
	default:
		fmt.Printf("Invalid")
	}
	return float32(total), float32(interest)
}

// CI calculates the compound interest on a savings plan
func ci(principal, period string, rate float64) (total, interest float64) {
	prncpl, _ := strconv.ParseFloat(principal, 32)
	prd, _ := strconv.ParseFloat(period, 32)

	dailyRate := rate / yr

	foo := math.Pow((1 + dailyRate), prd)
	tot := prncpl * foo
	intrst := tot - prncpl
	return tot, intrst
}

func si(principal, period string) (total, interest float64) {
	prncpl, _ := strconv.ParseFloat(principal, 32)
	prd, _ := strconv.ParseFloat(period, 32)
	term := prd / yr

	if prd >= 10 && prd <= 30 {
		rate := 0.06
		intrst := prncpl * rate * term
		tot := intrst + prncpl
		return tot, intrst
	}
	if prd >= 31 && prd <=60 {
		rate := 0.08
		intrst := prncpl * rate * term
		tot := intrst + prncpl
		return tot, intrst
	}
	if prd >= 61 && prd <=90 {
		rate := 0.1
		intrst := prncpl * rate * term
		tot := intrst + prncpl
		return tot, intrst
	}
	if prd >= 91 && prd <=2*yr {
		rate := 0.13
		intrst := prncpl * rate * term
		tot := intrst + prncpl
		return tot, intrst
	}
	if prd > 2*yr {
		rate := 0.31
		intrst := prncpl * rate * term
		tot := intrst + prncpl
		return tot, intrst
	}
	return
}
