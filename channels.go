package main

import "fmt"

func main() {

	//variable :=  make(chan type)  '<-' operator
	greeting := make(chan string)
	greetString := "Hello"

	go func() {
		greeting <- greetString // blocking because itis continuously trying to receive values,
		// it is ready to receive continuous flow of data.
	}()

	receiver := <-greeting

	fmt.Println(receiver)

}
