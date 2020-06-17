package calculator

import (
	"testing"
)

// TestCalculate function
func TestCalculate(t *testing.T) {
	plan := Plan{"safelock", "5000", "360"}
	tot, intrst := Calculate(plan)
	totWant := float32(5082.859603)
	intWant := float32(82.859603)

	if tot != totWant {
		t.Logf("Expected total %f, got %f", totWant, tot)
		t.Fail()

	}

	if intrst != intWant {
		t.Logf("Expected interest %f, got %f", intWant, intrst)
		t.Fail()
	}
}
