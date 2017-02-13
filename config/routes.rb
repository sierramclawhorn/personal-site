Rails.application.routes.draw do
	resources :pages
	resources :film
	resources :code

	root 'pages#index'
end
