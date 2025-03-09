import { Turbo } from "@hotwired/turbo-rails"; 
import { HotwireLivereload } from "hotwire-livereload";

if (process.env.NODE_ENV === "development") {
  new HotwireLivereload();
}
