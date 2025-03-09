// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "controllers"
import "hotwire-livereload"
import { Turbo } from "@hotwired/turbo-rails"
import debounce from "debounce";

var hotwire_livereload_received_default = debounce(({ force_reload }) => {
  const onErrorPage = document.title === "Action Controller: Exception caught";
  if (onErrorPage || force_reload) {
    console.log("[Hotwire::Livereload] Files changed. Force reloading..");
    document.location.reload();
  } else {
    console.log("[Hotwire::Livereload] Files changed. Reloading..");
    Turbo.cache.clear();
    Turbo.visit(window.location.href, { action: "replace" });
  }
}, 300);