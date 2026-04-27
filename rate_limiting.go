package main

import "time"

type RateLimiter struct {
	tokens     chan struct{}
	refillTime time.Duration
}

func NewRateLimiter(rateLimit int)

func main() {

}
