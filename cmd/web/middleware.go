package main

import (
	"github.com/justinas/nosurf"
	"net/http"
)

// NoSurf is the middleware to manage CSRF Tokens
func NoSurf(next http.Handler) http.Handler {
	csrfHandler := nosurf.New(next)

	csrfHandler.SetBaseCookie(
		http.Cookie{
			HttpOnly: true,
			Path:     "/",
			Secure:   app.InProduction,
			SameSite: http.SameSiteLaxMode,
		},
	)
	return csrfHandler
}

// SessionLoad is the middleware that will load the session
func SessionLoad(next http.Handler) http.Handler {
	return session.LoadAndSave(next)
}
