package main

import "fmt"

// RECEIVING DROM A CLOSED CHANNEL

func main() {

	ch := make(chan int)
	close(ch)

	val, ok := <-ch
	if !ok {
		fmt.Println("Channel is closed")
	} else {
		fmt.Println(val)
	}

}

// === Simple closing channel example ===
// func main() {

// 	ch := make(chan int)

// 	go func() {
// 		for i := range 5 {
// 			ch <- i
// 		}
// 		close(ch)
// 	}()

// 	for val := range ch {
// 		fmt.Println(val)
// 	}

// }
