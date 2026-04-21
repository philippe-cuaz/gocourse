package main

import "fmt"

func main() {

	// make(chan Type, capacity)
	ch := make(chan int, 2)
	ch <- 1
	fmt.Println("Buffered channels")

}
