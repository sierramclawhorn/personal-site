Rails.application.routes.draw do
	resources :pages
		get '/hello' => 'pages#hello'
	resources :film
	resources :code

	root 'pages#index'
end
