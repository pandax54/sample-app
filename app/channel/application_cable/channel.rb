class ApplicationCable::Channel < ActionCable::Channel::Base
  def subscribed
    stream_from "hotwire-reload"
  end
end