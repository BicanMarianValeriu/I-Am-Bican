(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    225: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n(36),
        r = n.n(a),
        o = n(14),
        i = n.n(o),
        s = n(30),
        c = n(4),
        l = n(5),
        u = n(78),
        d = n.n(u),
        p = n(31),
        m = (function() {
          function e(t, n) {
            Object(c.a)(this, e),
              (this.el = document.querySelector(t)),
              (this.el.WPCF7 = this),
              (this.options = Object(p.merge)({}, e.defaults, n));
          }
          return (
            Object(l.a)(
              e,
              [
                {
                  key: "getApiUrl",
                  value: function() {
                    return this.options.apiUrl;
                  }
                },
                {
                  key: "getRoute",
                  value: function(e) {
                    return this.getApiUrl().replace(
                      "contact-form-7/v1",
                      "contact-form-7/v1" + e
                    );
                  }
                },
                {
                  key: "getFormId",
                  value: function() {
                    var e =
                      this.options.formId ||
                      this.el.getAttribute("data-wpcf7-form") ||
                      this.el
                        .getAttribute("id")
                        .split("-")
                        .pop();
                    return parseInt(e, 10);
                  }
                },
                {
                  key: "sendMail",
                  value: (function() {
                    var e = Object(s.a)(
                      i.a.mark(function e() {
                        var t, n;
                        return i.a.wrap(
                          function(e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (t = new FormData(this.el)),
                                    (n = this.getRoute(
                                      "/contact-forms/" +
                                        this.getFormId() +
                                        "/feedback"
                                    )),
                                    (e.next = 4),
                                    d.a.post(n, { data: t }).then(function(e) {
                                      return e.data;
                                    })
                                  );
                                case 4:
                                  return e.abrupt("return", e.sent);
                                case 5:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function() {
                      return e.apply(this, arguments);
                    };
                  })()
                }
              ],
              [
                {
                  key: "defaults",
                  get: function() {
                    return {
                      apiUrl:
                        "http://working.on/iambican/wordpress/wp-json/contact-form-7/v1",
                      formId: ""
                    };
                  }
                }
              ]
            ),
            e
          );
        })(),
        f = n(28),
        w = {
          renderModal: function() {
            return r()({
              title: "Thanks for your interest in contacting me!",
              html:
                '<form name="swal-contact" id="wpcf7-6" data-wpcf7-form="6">\n            <div class="row">\n                <div class="col-md-6">\n                    <span class="wpcf7-form-control-wrap your-name">\n                        <input id="swal-input1" class="swal2-input required" name="your-name" type="text" placeholder="Your Name" required/>\n                    </span>\n                </div>\n                <div class="col-md-6">\n                    <span class="wpcf7-form-control-wrap your-email">\n                        <input id="swal-input2" class="swal2-input required" name="your-email" type="email" placeholder="Your Email" required/>\n                    </span>\n                </div>\n            </div>\n            <div class="row">\n                <div class="col">\n                    <textarea id="swal-input3" class="swal2-textarea required" name="your-message" placeholder="Your Message" required></textarea>\n                </div>\n            </div></form>',
              footer:
                'View your privacy policy &nbsp;<a href="/p/privacy-policy">here</a>.',
              focusConfirm: !1,
              customClass: "swal-contact",
              confirmButtonText: "Send Message",
              showLoaderOnConfirm: !0,
              showCloseButton: !0,
              onClose: function() {
                return (window.location.hash = "");
              },
              width: "45rem",
              preConfirm: function() {
                var e = document.forms["swal-contact"].getElementsByClassName(
                    "required"
                  ),
                  t = e["your-email"].value;
                return !1 === Object(f.d)(e)
                  ? r.a.showValidationMessage("Please fill all fields.")
                  : !1 === Object(f.c)(t)
                  ? r.a.showValidationMessage("Email address is not valid.")
                  : void new m("#wpcf7-6", {
                      apiUrl:
                        "http://www.iambican.com/dashboard/wp-json/contact-form-7/v1"
                    })
                      .sendMail()
                      .then(function(e) {
                        "mail_sent" === e.status
                          ? r()({
                              title: "Awesome",
                              text: e.message,
                              type: "success"
                            })
                          : r()({
                              title: "Something is wrong",
                              text: e.message,
                              type: "error"
                            });
                      });
              },
              allowOutsideClick: function() {
                return !r.a.isLoading();
              }
            }).then(function(e) {
              e.dismiss ||
                r()({
                  title: "Sending message, please wait...",
                  type: "info",
                  showConfirmButton: !1,
                  allowEscapeKey: !1,
                  allowOutsideClick: !1
                });
            });
          }
        };
      t.default = w;
    }
  }
]);
//# sourceMappingURL=swalcontact.5d2ca942.chunk.js.map
