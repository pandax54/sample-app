import debounce from "debounce";
import { Turbo } from "@hotwired/turbo-rails";  // Make sure Turbo is imported

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
