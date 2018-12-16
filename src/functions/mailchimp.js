import axios from "axios";
import { getFormData } from "./helpers";

class MailChimp {
  constructor(el, key) {
    this.el = el;
    this.API_KEY = key;
    this.data = {
      url: "https://usX.api.mailchimp.com/3.0/"
    };
  }

  setData(data) {
    this.data = data;
  }

  formatSubscriber(data) {
    let subscriber = { ...data, status: "subscribed" };
    return JSON.stringify(subscriber);
  }

  async send(path) {
    const { url } = this.data;
    const fullURL = url.concat(path);

    let userData = ["apikey", this.API_KEY].join(":");
    const headers = {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: "Basic " + userData
    };
    return await axios
      .post(fullURL, {
        headers: headers,
        withCredentials: true,
        data: this.formatSubscriber(getFormData(this.el))
      })
      .then(response => {
        console.log(response);
      });
  }
}

export default MailChimp;
