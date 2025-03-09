//= require hotwire-livereload

import { Turbo } from "@hotwired/turbo-rails"
import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"
import { startHotwire } from "hotwire-rails"
import "hotwire-livereload"


// Start Hotwire
startHotwire()
