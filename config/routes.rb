Rails.application.routes.draw do
	resources :pages
		get '/hello' => 'pages#hello'

	root 'pages#hello'
end
