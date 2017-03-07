Rails.application.routes.draw do
	resources :pages
	resources :film
	resources :code

	# get 'klink', to: 'code#klink'
	# get 'kathyandsierra', to: 'code#kathyandsierra'
	# get 'kwantree', to: 'code#kwantree'
	# get 'clinicfinder', to: 'code#clinicfinder'
	# get 'americanparadise', to: 'code#americanparadise'

	root 'pages#index'
end
