(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    221: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n(36),
        r = n.n(a),
        o = n(17),
        s = n.n(o),
        i = n(29),
        c = {
          apiUrl:
            "http://working.on/iambican/wordpress/wp-json/contact-form-7/v1",
          setApiUrl: function(e) {
            this.apiUrl = e;
          },
          getApiUrl: function() {
            return this.apiUrl;
          },
          getRoute: function(e) {
            var t = this.getApiUrl();
            return (t = t.replace(
              "contact-form-7/v1",
              "contact-form-7/v1" + e
            ));
          },
          getFormId: function(e) {
            var t = document.getElementById(e),
              n =
                t.getAttribute("data-wpcf7-form") ||
                t
                  .getAttribute("id")
                  .split("-")
                  .pop();
            return parseInt(n, 10);
          },
          sendMail: (function() {
            var e = Object(i.a)(
              s.a.mark(function e(t) {
                var n, a, r, o;
                return s.a.wrap(
                  function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = document.getElementById(t)),
                            (a = new FormData(n)),
                            (r = this.getRoute(
                              "/contact-forms/" +
                                this.getFormId(t) +
                                "/feedback"
                            )),
                            (e.next = 5),
                            fetch(r, { method: "POST", body: a }).then(function(
                              e
                            ) {
                              return e.json();
                            })
                          );
                        case 5:
                          return (o = e.sent), e.abrupt("return", o);
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            );
            return function(t) {
              return e.apply(this, arguments);
            };
          })()
        },
        l = n(35),
        u = {
          renderModal: function() {
            return r()({
              title: "Thanks for your interest in contacting me!",
              html:
                '<form name="swal-contact" id="wpcf7-6">\n            <div class="row">\n                <div class="col-md-6">\n                    <span class="wpcf7-form-control-wrap your-name">\n                        <input id="swal-input1" class="swal2-input required" name="your-name" type="text" placeholder="Your Name" required/>\n                    </span>\n                </div>\n                <div class="col-md-6">\n                    <span class="wpcf7-form-control-wrap your-email">\n                        <input id="swal-input2" class="swal2-input required" name="your-email" type="email" placeholder="Your Email" required/>\n                    </span>\n                </div>\n            </div>\n            <div class="row">\n                <div class="col">\n                    <textarea id="swal-input3" class="swal2-textarea required" name="your-message" placeholder="Your Message" required></textarea>\n                </div>\n            </div></form>',
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
                return !1 === Object(l.c)(e)
                  ? r.a.showValidationMessage("Please fill all fields.")
                  : !1 === Object(l.b)(t)
                  ? r.a.showValidationMessage("Email address is not valid.")
                  : (c.setApiUrl(
                      "http://www.iambican.com/dashboard/wp-json/contact-form-7/v1"
                    ),
                    void c.sendMail("wpcf7-6").then(function(e) {
                      "mail_sent" === e.status
                        ? r()({
                            title: "Awesome",
                            text: e.message,
                            type: "success"
                          })
                        : r()({
                            title: "Something is wrong",
                            text: e.message,
                            type: "success"
                          });
                    }));
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
      t.default = u;
    }
  }
]);
//# sourceMappingURL=swalcontact.6d47612b.chunk.js.map
