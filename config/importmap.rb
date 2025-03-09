# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"
pin "hotwire-livereload", to: "https://cdn.jsdelivr.net/npm/hotwire-livereload@2.0.0/dist/hotwire-livereload.js"
pin "turbo-rails", to: "turbo.min.js"
