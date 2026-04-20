package main

import (
	"fmt"
	"time"
)

// func main() {

// 	done := make(chan struct{})

// 	go func() {
// 		fmt.Println("Working...")
// 		time.Sleep(2 * time.Second)
// 		done <- struct{}{}
// 	}()

// 	<-done

// 	fmt.Println("Finished.")
// }

func main() {
	numGoroutines := 3
	done := make(chan int, 3)

	for i := range numGoroutines {
		go func(id int) {
			fmt.Printf("Goroutines %d working...\n", id)
			time.Sleep(time.Second)
			done <- id
		}(i)
	}

	for range numGoroutines {
		<-done // Wait for each goroutine to finish
	}

	fmt.Println("All goroutines are finished")
}
