(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    110: function(e) {
      e.exports = { a: { REST: "http://www.iambican.com/dashboard/wp-json/" } };
    },
    115: function(e, t, a) {
      e.exports = a.p + "static/media/logout.e75855a1.svg";
    },
    117: function(e, t, a) {
      e.exports = a.p + "static/media/facebook.d1ac3589.svg";
    },
    118: function(e, t, a) {
      e.exports = a.p + "static/media/linkedin.fc75bb7d.svg";
    },
    120: function(e, t, a) {
      e.exports = a.p + "static/media/email.1037f077.svg";
    },
    121: function(e, t, a) {
      e.exports = a.p + "static/media/paper-plane.14b73f92.svg";
    },
    122: function(e, t, a) {
      e.exports = a.p + "static/media/suitcase.b73ef297.svg";
    },
    123: function(e, t, a) {
      e.exports = a.p + "static/media/bican.9d90f6b5.jpg";
    },
    124: function(e, t, a) {
      e.exports = a.p + "static/media/bican-old.19e754c9.jpg";
    },
    126: function(e, t, a) {
      e.exports = a.p + "static/media/clock-o.46727951.svg";
    },
    127: function(e, t, a) {
      e.exports = a.p + "static/media/banknote.d1b091fb.svg";
    },
    128: function(e, t, a) {
      e.exports = a.p + "static/media/website.73103064.svg";
    },
    129: function(e, t, a) {
      e.exports = a.p + "static/media/get-money.a0f406bf.svg";
    },
    133: function(e, t, a) {
      e.exports = a(221);
    },
    214: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(36),
        r = a.n(n),
        o = a(28),
        s = a(29),
        c = a(60),
        i = a.n(c),
        l = a(3),
        u = a(61),
        m = {
          createToast: r.a.mixin({
            toast: !0,
            position: "top-end",
            showConfirmButton: !1,
            timer: 3e3
          }),
          renderModal: function() {
            return r()({
              title: "Login",
              html:
                '<form name="swal-login">\n            <div class="row">\n                <div class="col-12">\n                    <div class="input-group mb-3">\n                        <div class="input-group-prepend">\n                            <span class="input-group-text" id="basic-addon1">User</span>\n                        </div>\n                        <input class="form-control required" aria-label="Username" aria-describedby="basic-addon1" name="username" type="text" placeholder="Your Username" required/>\n                    </div>\n                </div>\n                <div class="col-12">\n                    <div class="input-group mb-3">\n                        <div class="input-group-prepend">\n                            <span class="input-group-text" id="basic-addon2">Pass</span>\n                        </div> \n                        <input class="form-control required" aria-label="Password" aria-describedby="basic-addon2" name="password" type="password" placeholder="Your Password" required/>      \n                    </div>\n                </div> \n                <div class="col-12">\n                    <div class="row"> \n                        <div class="col-12 text-right">\n                            <p><a href="javascript:void(0)" class="swal-login__forgot-pwd">Forgot Password?</a></p>\n                        </div>\n                    </div>\n                </div>\n            </div></form>',
              footer:
                'View your privacy policy &nbsp;<a href="/p/privacy-policy">here</a>.',
              customClass: "swal-auth",
              confirmButtonText: "Login",
              showLoaderOnConfirm: !0,
              backdrop: "rgba(0,0,0,0.2)",
              showCloseButton: !0,
              width: "35rem",
              preConfirm: function() {
                var e = document.forms["swal-login"].getElementsByClassName(
                    "required"
                  ),
                  t = e.username.value,
                  a = e.password.value;
                if (!1 === Object(o.d)(e))
                  return r.a.showValidationMessage("Please fill all fields.");
                Object(l.k)({ username: t, password: a }).then(function(e) {
                  var t = e && e.token;
                  if (t) {
                    Object(s.d)(t), i.a.set("authToken", t, { expires: 7 });
                    var a = Object(u.a)().store;
                    Object(l.l)(t)
                      .then(function(e) {
                        a.dispatch({ type: l.g, payload: e });
                      })
                      .then(
                        m.createToast({
                          type: "success",
                          title: "Welcome back ".concat(
                            e.user_display_name,
                            "."
                          )
                        })
                      );
                  } else
                    r()({
                      title: "Something went wrong.",
                      html: "Invalid login credentials.",
                      type: "error",
                      showCloseButton: !0,
                      showCancelButton: !0,
                      cancelButtonText: "Try Again",
                      cancelButtonColor: "#01acf4",
                      showConfirmButton: !1
                    }).then(function(e) {
                      e.dismiss === r.a.DismissReason.cancel && m.renderModal();
                    });
                });
              },
              allowOutsideClick: function() {
                return !r.a.isLoading();
              }
            }).then(function(e) {
              e.dismiss ||
                r()({
                  title: "Checking details, please wait...",
                  type: "question",
                  showConfirmButton: !1,
                  allowEscapeKey: !1,
                  allowOutsideClick: !1
                });
            });
          }
        };
      t.default = m;
    },
    219: function(e, t, a) {},
    221: function(e, t, a) {
      "use strict";
      a.r(t);
      a(134);
      var n,
        r = a(1),
        o = a.n(r),
        s = a(50),
        c = a.n(s),
        i = a(32),
        l = a(15),
        u = a(51),
        m = a(34),
        d = a(61),
        p = a(131),
        h = a(35),
        f = a.n(h),
        v = a(4),
        b = a(5),
        g = a(7),
        _ = a(6),
        E = a(8),
        y = a(14),
        w = a.n(y),
        j = a(30),
        O = a(226),
        N = a(222),
        k = a(3),
        C = a(31),
        x = a(16),
        S = (function() {
          var e = Object(j.a)(
            w.a.mark(function e(t) {
              return w.a.wrap(
                function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          t.fetchDispatcher(
                            "wp/v2/menu/" + t.wpMenuId,
                            {},
                            { success: k.d }
                          )
                        );
                      case 2:
                        return e.abrupt("return", e.sent);
                      case 3:
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
        })(),
        M = (function(e) {
          function t() {
            return (
              Object(v.a)(this, t),
              Object(g.a)(this, Object(_.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(E.a)(t, e),
            Object(b.a)(t, [
              {
                key: "renderMenuItems",
                value: function(e) {
                  var t = this;
                  if (this.props.wpMenuId === e.ID)
                    return e.items.map(function(e, a) {
                      var n = ["nav-link"],
                        r = e.classes.length ? e.classes.split(" ") : "";
                      if (r) for (var s = 0; s < r.length; s++) n.push(r[s]);
                      var c = ["nav-item"];
                      return (
                        e.children && c.push("nav-item--has-dropdown"),
                        o.a.createElement(
                          "li",
                          {
                            key: a,
                            className: c.join(" "),
                            "aria-haspopup": e.children && e.children.length > 0
                          },
                          o.a.createElement(
                            O.a,
                            { exact: !0, className: n.join(" "), to: e.url },
                            e.title
                          ),
                          e.children &&
                            o.a.createElement(
                              "ul",
                              { className: "nav-item__dropdown" },
                              t.renderDropdown(e.children)
                            )
                        )
                      );
                    });
                }
              },
              {
                key: "renderDropdown",
                value: function(e) {
                  return e.map(function(e) {
                    var t = ["nav-link", "nav-link--dropdown"],
                      a = e.classes.length ? e.classes.split(" ") : "";
                    if (a) for (var n = 0; n < a.length; n++) t.push(a[n]);
                    return o.a.createElement(
                      "li",
                      { key: e.id, className: "nav-item" },
                      o.a.createElement(
                        O.a,
                        { exact: !0, className: t.join(" "), to: e.url },
                        e.title
                      )
                    );
                  });
                }
              },
              {
                key: "render",
                value: function() {
                  var e = [];
                  return (
                    e.push(
                      this.props.className ? this.props.className : "navigation"
                    ),
                    o.a.createElement(
                      "nav",
                      { className: e.join(" ") },
                      o.a.createElement(
                        "ul",
                        {
                          className: this.props.menuClass
                            ? this.props.menuClass
                            : "nav nav-pills justify-content-end"
                        },
                        this.props.menu && this.renderMenuItems(this.props.menu)
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.Component),
        T = Object(N.a)(
          Object(l.connect)(
            function(e, t) {
              var a = e.api.menus,
                n = t.wpMenuId;
              return { menu: a && Object(C.find)(a, { ID: n }) };
            },
            function(e) {
              return Object(x.b)({ fetchDispatcher: k.j }, e);
            }
          )(Object(m.frontloadConnect)(S, { onMount: !0, onUpdate: !1 })(M))
        ),
        L = function() {
          return o.a.createElement(
            "div",
            { className: "header__menu menu col pr-0" },
            o.a.createElement(T, { wpMenuId: 2, className: "menu__header" })
          );
        },
        I = a(20),
        D = a(19),
        A = a(60),
        F = a.n(A),
        P = a(23),
        U = a(80),
        B = a.n(U),
        H = a(115),
        q = a.n(H),
        R = a(29),
        W = a(214),
        Y = (function(e) {
          function t(e) {
            var a;
            return (
              Object(v.a)(this, t),
              ((a = Object(g.a)(this, Object(_.a)(t).call(this, e))).state = {
                Modal: null,
                dropdownOpen: !1
              }),
              (a._onMouseOver = a._onMouseOver.bind(
                Object(I.a)(Object(I.a)(a))
              )),
              (a._onButtonClick = a._onButtonClick.bind(
                Object(I.a)(Object(I.a)(a))
              )),
              (a._onLogoutClick = a._onLogoutClick.bind(
                Object(I.a)(Object(I.a)(a))
              )),
              (a.toggle = a.toggle.bind(Object(I.a)(Object(I.a)(a)))),
              a
            );
          }
          return (
            Object(E.a)(t, e),
            Object(b.a)(t, [
              {
                key: "_onMouseOver",
                value: function() {
                  var e = this;
                  null === this.state.Modal &&
                    Promise.resolve()
                      .then(a.bind(null, 214))
                      .then(function(t) {
                        return e.setState({ Modal: t.default });
                      });
                }
              },
              {
                key: "_onButtonClick",
                value: function() {
                  var e = this;
                  null === this.state.Modal &&
                    Promise.resolve()
                      .then(a.bind(null, 214))
                      .then(function(t) {
                        return e.setState({ Modal: t.default });
                      }),
                    null === this.state.Modal ||
                      Object(R.b)() ||
                      this.state.Modal.renderModal();
                }
              },
              {
                key: "_onLogoutClick",
                value: function() {
                  Object(R.b)() &&
                    (Object(R.c)(),
                    this.props.dispatch({ type: k.h }),
                    F.a.remove("authToken"),
                    W.default.createToast({
                      type: "success",
                      title: "Logged out. See you soon :)."
                    }));
                }
              },
              {
                key: "toggle",
                value: function() {
                  this.setState(function(e) {
                    return { dropdownOpen: !e.dropdownOpen };
                  });
                }
              },
              {
                key: "componentDidMount",
                value: function() {
                  var e = this.props.dispatch;
                  Object(R.b)() &&
                    Object(k.l)(Object(R.a)()).then(function(t) {
                      e({ type: k.g, payload: t });
                    });
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props.user,
                    t = e.name,
                    a = e.avatar_urls,
                    n = ["header__login", "col-auto", "pl-0", "header-login"];
                  return (
                    Object(R.b)() && n.push(["header-login--is-auth"]),
                    o.a.createElement(
                      "div",
                      { className: n.join(" ") },
                      Object(R.b)()
                        ? o.a.createElement(
                            P.b,
                            {
                              isOpen: this.state.dropdownOpen,
                              toggle: this.toggle,
                              size: "lg",
                              direction: "left"
                            },
                            o.a.createElement(
                              P.e,
                              {
                                className: "header-login__btn float-right btn"
                              },
                              t
                                ? o.a.createElement("img", {
                                    src: a && a[96],
                                    alt: "".concat(t, "'s avatar"),
                                    className: "header-login__btn-avatar"
                                  })
                                : o.a.createElement(D.a, {
                                    src: B.a,
                                    svgClassName: "svg-icon svg-icon--header",
                                    className: "header-login__icon-svg"
                                  })
                            ),
                            o.a.createElement(
                              P.d,
                              { right: !0 },
                              o.a.createElement(
                                P.c,
                                { header: !0 },
                                "Howdy ",
                                t
                              ),
                              o.a.createElement(P.c, { divider: !0 }),
                              o.a.createElement(P.c, null, "Another Action"),
                              o.a.createElement(P.c, { divider: !0 }),
                              o.a.createElement(
                                P.c,
                                {
                                  className: "text-muted",
                                  onClick: this._onLogoutClick
                                },
                                o.a.createElement(D.a, {
                                  src: q.a,
                                  svgClassName: "svg-icon",
                                  className: "header-logout__svg"
                                }),
                                o.a.createElement(
                                  "span",
                                  { className: "header-logout__label" },
                                  "LogOut"
                                )
                              )
                            )
                          )
                        : o.a.createElement(
                            "button",
                            {
                              id: "header-login",
                              className: "header-login__btn float-right btn",
                              onClick: this._onButtonClick,
                              onMouseOver: this._onMouseOver,
                              onTouchStart: this._onMouseOver
                            },
                            o.a.createElement(D.a, {
                              src: B.a,
                              svgClassName: "svg-icon svg-icon--header",
                              className: "header-login__icon-svg"
                            })
                          )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.Component),
        z = Object(l.connect)(function(e) {
          return { user: e.api.user };
        })(Y),
        J = function() {
          return o.a.createElement(
            "header",
            {
              id: "header",
              className: "header",
              itemScope: "",
              itemType: "http://schema.org/WPHeader"
            },
            o.a.createElement(
              "div",
              { className: "header__bar" },
              o.a.createElement(
                "div",
                { className: "container" },
                o.a.createElement(
                  "div",
                  { className: "row" },
                  o.a.createElement(L, null),
                  o.a.createElement(z, null)
                )
              )
            )
          );
        },
        V = function() {
          return o.a.createElement(
            "div",
            { className: "footer__copyright" },
            "\xa9 Copyright ",
            new Date().getFullYear(),
            " - All rights reserved."
          );
        },
        G = a(117),
        Z = a.n(G),
        X = a(118),
        $ = a.n(X),
        K = function() {
          return o.a.createElement(
            "ul",
            { className: "footer__social social social--footer" },
            o.a.createElement(
              "li",
              { className: "social__item" },
              o.a.createElement(
                "a",
                {
                  href: "https://www.facebook.com/bican.marian.valeriu",
                  rel: "noopener noreferrer",
                  target: "_blank"
                },
                o.a.createElement(D.a, {
                  src: Z.a,
                  svgClassName: "svg-icon svg-icon--social-footer",
                  className: "social__icon social__icon--facebook"
                })
              )
            ),
            o.a.createElement(
              "li",
              { className: "social__item" },
              o.a.createElement(
                "a",
                {
                  href:
                    "https://www.linkedin.com/in/marian-valeriu-bican-b12169103/",
                  rel: "noopener noreferrer",
                  target: "_blank"
                },
                o.a.createElement(D.a, {
                  src: $.a,
                  svgClassName: "svg-icon svg-icon--social-footer",
                  className: "social__icon social__icon--linkedin"
                })
              )
            )
          );
        },
        Q = a(17),
        ee = a(119),
        te = a.n(ee),
        ae = a(28),
        ne = (function(e) {
          function t(e) {
            var a;
            return (
              Object(v.a)(this, t),
              ((a = Object(g.a)(this, Object(_.a)(t).call(this, e))).state = {
                errors: [],
                isSubmiting: !1
              }),
              a
            );
          }
          return (
            Object(E.a)(t, e),
            Object(b.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  var e = this,
                    t = document.querySelector(".newsletter__form");
                  t.elements[0].addEventListener("keyup", function() {
                    e.validate(), e.generateErrors();
                  }),
                    t.addEventListener("submit", function(t) {
                      t.preventDefault(),
                        e.validate(),
                        e.generateErrors(),
                        0 === e.state.errors.length && e.onSubmit();
                    });
                }
              },
              {
                key: "onSubmit",
                value: function() {
                  var e = this;
                  if (!this.state.isSubmiting) {
                    this.setState({ isSubmiting: !0 });
                    var t = document.querySelector(".newsletter__form"),
                      a = ""
                        .concat(
                          "//wecodeart.us2.list-manage.com/subscribe/post?u=ab68e00b82ffb88387f008ce7&amp;id=abee3454c2",
                          "&"
                        )
                        .concat(Object(ae.b)(Object(ae.a)(t)))
                        .replace("/post?", "/post-json?");
                    te()(a, { param: "c" }, function(a, n) {
                      e.setState({ isSubmiting: !1 });
                      var r,
                        o = document.querySelector(".newsletter__messages");
                      "success" === n.result &&
                        ((r = "alert-success"),
                        o.classList.remove("alert-danger")),
                        "error" === n.result &&
                          ((r = "alert-danger"),
                          o.classList.remove("alert-success"));
                      var s = document.createElement("div");
                      (s.innerHTML = n.msg),
                        o.appendChild(s),
                        o.classList.add(r),
                        o.classList.remove("d-none"),
                        (t.elements[0].value = ""),
                        setTimeout(function() {
                          (o.innerHTML = ""), o.classList.add("d-none");
                        }, 5e3);
                    });
                  }
                }
              },
              {
                key: "validate",
                value: function() {
                  var e = document.querySelector(".newsletter__form").elements,
                    t = e[0].value;
                  this.setState({ errors: [] }),
                    !1 === Object(ae.d)(e)
                      ? this.setState(function(e) {
                          return {
                            errors: Object(Q.a)(e.errors).concat([
                              {
                                key: "empty_fields",
                                message: "Please fill all required fields!"
                              }
                            ])
                          };
                        })
                      : !1 === Object(ae.c)(t) &&
                        this.setState(function(e) {
                          return {
                            errors: Object(Q.a)(e.errors).concat([
                              {
                                key: "invalid_email",
                                message: "Email address appears to be invalid."
                              }
                            ])
                          };
                        });
                }
              },
              {
                key: "generateErrors",
                value: function() {
                  var e = document.querySelector(".newsletter__form").elements
                      .EMAIL,
                    t = document.querySelector(".newsletter__messages");
                  if (
                    (t.classList.add("d-none"),
                    (t.innerHTML = ""),
                    e.classList.remove("is-invalid"),
                    0 !== this.state.errors.length)
                  ) {
                    var a = this.state.errors;
                    e.classList.add("is-invalid"),
                      a.map(function(e) {
                        var a = document.createElement("div");
                        return (
                          a.classList.add("error"),
                          a.classList.add("error--" + e.key),
                          (a.innerHTML = e.message.toString()),
                          t.appendChild(a)
                        );
                      }),
                      t.classList.remove("alert-success"),
                      t.classList.add("alert-danger"),
                      t.classList.remove("d-none");
                  }
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.state.isSubmiting ? "LOADING..." : "SUBSCRIBE";
                  return o.a.createElement(
                    "div",
                    { className: "newsletter newsletter--footer" },
                    o.a.createElement("div", {
                      className:
                        "newsletter__messages alert alert-danger d-none"
                    }),
                    o.a.createElement(
                      "form",
                      { className: "newsletter__form", noValidate: !0 },
                      o.a.createElement(
                        P.g,
                        null,
                        o.a.createElement(P.f, {
                          placeholder: "Email Address",
                          name: "EMAIL",
                          type: "email",
                          required: "required"
                        }),
                        o.a.createElement(
                          P.h,
                          { addonType: "append" },
                          o.a.createElement(
                            P.a,
                            {
                              type: "submit",
                              className:
                                "newsletter__button btn btn--primary text-color-light"
                            },
                            e
                          )
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.Component),
        re = a(26),
        oe = (function(e) {
          function t() {
            return (
              Object(v.a)(this, t),
              Object(g.a)(this, Object(_.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(E.a)(t, e),
            Object(b.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  this.props.dispatch(
                    Object(k.j)("wp/v2/clients", {}, { success: k.b })
                  );
                }
              },
              {
                key: "componentWillUnmount",
                value: function() {
                  re.b.killAll(!1, !1, !0);
                }
              },
              {
                key: "shouldComponentUpdate",
                value: function(e) {
                  return this.props.clients !== e.clients;
                }
              },
              {
                key: "componentDidUpdate",
                value: function() {
                  var e = document.querySelectorAll(".companies"),
                    t = e[0].querySelectorAll(".companies__logo").length,
                    a = e.length,
                    n = Object(Q.a)(Array(a).keys()),
                    r = -1;
                  re.b.set(document.querySelectorAll(".companies__logo"), {
                    autoAlpha: 0
                  });
                  for (var o = 0; o < a; o++)
                    for (var s = 0; s < 5; s++)
                      if (o === s && s < a) {
                        var c = document.querySelectorAll(".companies")[o];
                        re.b.set(c.children[s], { autoAlpha: 1 });
                      }
                  re.b.delayedCall(1, function e() {
                    var o = Math.floor(Math.random() * a);
                    o !== r
                      ? ((function e(r) {
                          for (
                            var o = Math.floor(Math.random() * t), s = 0;
                            s < a;
                            s++
                          )
                            if (o === n[s]) return void e(r);
                          for (var c = 0; c < t; c++) {
                            var i = document.querySelectorAll(".companies")[r]
                              .children[c];
                            if (
                              window
                                .getComputedStyle(i)
                                .getPropertyValue("opacity") > 0.5
                            ) {
                              if (o === c) return void e(r);
                              re.b.to(i, 0.75, { autoAlpha: 0 });
                            } else
                              o === c &&
                                (re.b.to(i, 0.75, {
                                  autoAlpha: 1,
                                  delay: 0.25
                                }),
                                (n[r] = c));
                          }
                        })(o),
                        (r = o),
                        re.b.delayedCall(2.5, e))
                      : e();
                  });
                }
              },
              {
                key: "renderColumns",
                value: function() {
                  var e = this;
                  return Object(Q.a)(Array(4)).map(function(t, a) {
                    return o.a.createElement(
                      "div",
                      { key: a, className: "col-6 col-sm-3" },
                      o.a.createElement(
                        "div",
                        { className: "companies" },
                        e.renderLogos()
                      )
                    );
                  });
                }
              },
              {
                key: "renderLogos",
                value: function() {
                  var e = this.props.clients;
                  if (e)
                    return e.map(function(e, t) {
                      var a = e.acf.client_logo;
                      return o.a.createElement(
                        "div",
                        { key: t, className: "companies__logo" },
                        o.a.createElement("img", {
                          width: "200",
                          src: a && a.url,
                          alt: e.name
                        })
                      );
                    });
                }
              },
              {
                key: "render",
                value: function() {
                  return o.a.createElement(
                    "div",
                    { className: "footer__logos company-logos" },
                    o.a.createElement(
                      "div",
                      { className: "container" },
                      o.a.createElement(
                        "div",
                        { className: "row" },
                        o.a.createElement(
                          "div",
                          { className: "col text-center mb-4" },
                          o.a.createElement(
                            "h3",
                            {
                              className:
                                "text-font--cursive text-color--primary company-logos__title"
                            },
                            "Just Few Of The Clients"
                          )
                        )
                      ),
                      o.a.createElement(
                        "div",
                        { className: "row" },
                        this.renderColumns()
                      ),
                      o.a.createElement("hr", { className: "tall" })
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.Component),
        se = Object(l.connect)(function(e) {
          return { clients: e.api.clients };
        })(oe),
        ce = function() {
          return o.a.createElement(
            "footer",
            {
              id: "footer",
              className: "footer",
              itemScope: "",
              itemType: "http://schema.org/WPFooter"
            },
            o.a.createElement(se, null),
            o.a.createElement(
              "div",
              { className: "footer__newsletter footer-newsletter" },
              o.a.createElement(
                "div",
                { className: "container" },
                o.a.createElement(
                  "div",
                  { className: "row" },
                  o.a.createElement(
                    "div",
                    { className: "col-lg-6" },
                    o.a.createElement(
                      "h4",
                      {
                        className:
                          "footer-newsletter__title mb-0 text-center text-lg-left"
                      },
                      "Subscribe to my ",
                      o.a.createElement("strong", null, "Newsletter")
                    ),
                    o.a.createElement(
                      "p",
                      {
                        className:
                          "footer-newsletter__subtitle mb-0 mb-lg-4 text-center text-lg-left"
                      },
                      "Get awesome news about my work."
                    )
                  ),
                  o.a.createElement(
                    "div",
                    { className: "col-lg-6" },
                    o.a.createElement(ne, null)
                  )
                )
              )
            ),
            o.a.createElement(
              "div",
              { className: "footer__bottom" },
              o.a.createElement(
                "div",
                { className: "container" },
                o.a.createElement(
                  "div",
                  { className: "row" },
                  o.a.createElement(
                    "div",
                    { className: "col-md-6 text-center text-md-left" },
                    o.a.createElement(V, null),
                    o.a.createElement(K, null)
                  ),
                  o.a.createElement(
                    "div",
                    { className: "col-md-6" },
                    o.a.createElement(T, {
                      className: "footer__menu",
                      wpMenuId: 7,
                      menuClass:
                        "nav justify-content-center justify-content-md-end"
                    })
                  )
                )
              )
            )
          );
        },
        ie = a(21),
        le = a(18),
        ue = a(212),
        me = function() {
          return o.a.createElement(
            "div",
            { className: "about-me__content" },
            o.a.createElement(
              "div",
              { className: "container" },
              o.a.createElement(
                "div",
                { className: "row" },
                o.a.createElement(
                  "div",
                  { className: "col-12" },
                  o.a.createElement(
                    "div",
                    {
                      className:
                        "col-lg-6 ml-5 mb-5 mb-lg-4 float-right about-me__box box-shadow box-shadow--big"
                    },
                    o.a.createElement("h4", null, "Personal Details"),
                    o.a.createElement(
                      "div",
                      { className: "row" },
                      o.a.createElement(
                        "div",
                        { className: "col-md-5" },
                        o.a.createElement(
                          "ul",
                          { className: "about-me__box-list p-0 mb-0" },
                          o.a.createElement(
                            "li",
                            null,
                            o.a.createElement("span", null, "Birthday:"),
                            " 02-08-1993"
                          ),
                          o.a.createElement(
                            "li",
                            null,
                            o.a.createElement("span", null, "Nationality:"),
                            " Romanian"
                          )
                        )
                      ),
                      o.a.createElement(
                        "div",
                        { className: "col-md-7" },
                        o.a.createElement(
                          "ul",
                          { className: "about-me__box-list p-0 mb-0" },
                          o.a.createElement(
                            "li",
                            null,
                            o.a.createElement("span", null, "Phone:"),
                            " ",
                            o.a.createElement(
                              "a",
                              { href: "tel:+40761176106" },
                              "+40761176106"
                            )
                          ),
                          o.a.createElement(
                            "li",
                            null,
                            o.a.createElement("span", null, "eMail:"),
                            " ",
                            o.a.createElement(
                              "a",
                              { href: "mailto:marianvaleriubican@gmail.com" },
                              "marianvaleriubican@gmail.com"
                            )
                          )
                        )
                      )
                    )
                  ),
                  o.a.createElement(
                    "h2",
                    { className: "about-me__content-title text-uppercase" },
                    "About Me"
                  ),
                  o.a.createElement(
                    "p",
                    { className: "about-me__content-text" },
                    "I'm Bican, a full stack web developer from Targu Jiu, Romania. I love to share what I know through my work, articles and tutorials. I've been creating on the web for around 2 years and have become pretty good at it. From a technical standpoint, I spend most of my time working with JavaScript, CSS3, HTML5 and PHP (WordPress)."
                  ),
                  o.a.createElement(
                    "p",
                    { className: "about-me__content-text" },
                    "New and open source web technologies make me super excited and I can\u2019t wait to see what is to come of the web in the next few years. I\u2019ve graduated of Targu Jiu UCB University\u2019s Law program and soon Foreign Language: English. Why not computer or informatics? Well, this is a hard answer, but this is my passion and I LOVE what I do :)."
                  )
                )
              )
            )
          );
        },
        de = a(120),
        pe = a.n(de),
        he = a(121),
        fe = a.n(he),
        ve = a(122),
        be = a.n(ve),
        ge = a(123),
        _e = a.n(ge),
        Ee = a(124),
        ye = a.n(Ee),
        we = (function(e) {
          function t(e) {
            var a;
            return (
              Object(v.a)(this, t),
              ((a = Object(g.a)(this, Object(_.a)(t).call(this, e))).state = {
                Modal: null
              }),
              (a._onMouseOver = a._onMouseOver.bind(
                Object(I.a)(Object(I.a)(a))
              )),
              (a._onButtonClick = a._onButtonClick.bind(
                Object(I.a)(Object(I.a)(a))
              )),
              a
            );
          }
          return (
            Object(E.a)(t, e),
            Object(b.a)(t, [
              {
                key: "_onMouseOver",
                value: function() {
                  var e = this;
                  null === this.state.Modal &&
                    a
                      .e(3)
                      .then(a.bind(null, 225))
                      .then(function(t) {
                        return e.setState({ Modal: t.default });
                      });
                }
              },
              {
                key: "_onButtonClick",
                value: function() {
                  var e = this;
                  null === this.state.Modal &&
                    a
                      .e(3)
                      .then(a.bind(null, 225))
                      .then(function(t) {
                        return e.setState({ Modal: t.default });
                      })
                      .then(function() {
                        return e.state.Modal.renderModal();
                      }),
                    this.state.Modal && this.state.Modal.renderModal();
                }
              },
              {
                key: "componentDidMount",
                value: function() {
                  "#sendmsg" === window.location.hash.split("-").pop() &&
                    this._onButtonClick(),
                    this.animateProfilePicture(),
                    this.handlePictureChange();
                }
              },
              {
                key: "handlePictureChange",
                value: function() {
                  var e = document.querySelectorAll(".about-me__profile div");
                  setInterval(function() {
                    for (
                      var t = e[Math.floor(Math.random() * e.length)],
                        a = 0,
                        n = e.length;
                      a < n;
                      a++
                    )
                      e[a].classList.remove("shown");
                    t.classList.add("shown");
                  }, 5e3);
                }
              },
              {
                key: "animateProfilePicture",
                value: function() {
                  if (!(window.innerWidth < 576)) {
                    var e,
                      t,
                      a = document.querySelector(".about-me__profile");
                    a.addEventListener("mousemove", function(n) {
                      (n = n || window.event), (e = n.pageX), (t = n.pageY);
                      var r = (e / a.offsetWidth) * 100 - 100,
                        o = (t / a.offsetHeight) * 100 - 100;
                      re.b.to(a, 0.5, {
                        rotationY: 0.15 * r,
                        rotationX: -0.15 * o,
                        scale: 1.07,
                        ease: re.a.easeOut,
                        transformPerspective: 500,
                        transformOrigin: "center"
                      });
                    }),
                      a.addEventListener("mouseleave", function() {
                        re.b.to(a, 0.5, {
                          rotationY: 0,
                          rotationX: 0,
                          scale: 1
                        });
                      });
                  }
                }
              },
              {
                key: "render",
                value: function() {
                  return o.a.createElement(
                    "section",
                    { id: "about-me", className: "about-me" },
                    o.a.createElement("div", {
                      className: "about-me__background"
                    }),
                    o.a.createElement(
                      "div",
                      { className: "about-me__intro" },
                      o.a.createElement(
                        "div",
                        { className: "container" },
                        o.a.createElement(
                          "div",
                          { className: "row" },
                          o.a.createElement(
                            "div",
                            { className: "col-lg-4 about-me__image" },
                            o.a.createElement(
                              "div",
                              {
                                className:
                                  "about-me__profile box-shadow box-shadow--profile"
                              },
                              o.a.createElement("div", {
                                className: "shown",
                                style: {
                                  backgroundImage: "url('".concat(_e.a, "')")
                                }
                              }),
                              o.a.createElement("div", {
                                style: {
                                  backgroundImage: "url('".concat(ye.a, "')")
                                }
                              })
                            )
                          ),
                          o.a.createElement(
                            "div",
                            { className: "col-lg-8 about-me__info" },
                            o.a.createElement(
                              "h1",
                              { className: "about-me__headline mb-4" },
                              "Bican Marian Valeriu"
                            ),
                            o.a.createElement(
                              "p",
                              { className: "about-me__subline mb-2 mb-md-3" },
                              "WordPress/React Developer at myZone/AM2Studio"
                            ),
                            o.a.createElement(
                              "p",
                              { className: "about-me__subline mb-1 mb-md-2" },
                              "Targu Jiu, Gorj, Romania"
                            )
                          )
                        )
                      )
                    ),
                    o.a.createElement(
                      "div",
                      { className: "about-me__links" },
                      o.a.createElement(
                        "div",
                        { className: "container" },
                        o.a.createElement(
                          "div",
                          { className: "row justify-content-end" },
                          o.a.createElement(
                            "div",
                            { className: "col-4 col-lg-3 text-center" },
                            o.a.createElement(
                              "a",
                              { href: "#footer", className: "about-me__link" },
                              o.a.createElement(D.a, {
                                src: pe.a,
                                svgClassName:
                                  "svg-icon svg-icon--about-section",
                                className: "about-me__link-icon"
                              }),
                              o.a.createElement(
                                "span",
                                null,
                                "Contact Information"
                              )
                            )
                          ),
                          o.a.createElement(
                            "div",
                            { className: "col-4 col-lg-2 text-center" },
                            o.a.createElement(
                              "a",
                              {
                                href: "#sendmsg",
                                className: "about-me__link",
                                onClick: this._onButtonClick,
                                onMouseOver: this._onMouseOver,
                                onTouchStart: this._onMouseOver
                              },
                              o.a.createElement(D.a, {
                                src: fe.a,
                                svgClassName:
                                  "svg-icon svg-icon--about-section",
                                className: "about-me__link-icon"
                              }),
                              o.a.createElement("span", null, "Send Message")
                            )
                          ),
                          o.a.createElement(
                            "div",
                            { className: "col-4 col-lg-3 text-center" },
                            o.a.createElement(
                              ue.a,
                              { to: "/portfolio", className: "about-me__link" },
                              o.a.createElement(D.a, {
                                src: be.a,
                                svgClassName:
                                  "svg-icon svg-icon--about-section",
                                className: "about-me__link-icon"
                              }),
                              o.a.createElement("span", null, "View Portfolio")
                            )
                          )
                        )
                      )
                    ),
                    o.a.createElement(me, null)
                  );
                }
              }
            ]),
            t
          );
        })(r.Component),
        je = (function(e) {
          function t(e) {
            var a;
            return (
              Object(v.a)(this, t),
              ((a = Object(g.a)(this, Object(_.a)(t).call(this, e))).state = {
                scrollmagic: !1,
                experience: [
                  {
                    jobTitle: "WordPress/Frontend Developer",
                    company: "AM2 Studio / myZone",
                    description:
                      'Contacted by Andrej - AM2Studio CEO, via Facebook, setup an interview and got a simple project \n                    to do. While I was guided by a senior front end developer and a couple of new tools where introduced to \n                    me (BEM, SCSS, GIT + more), I completed the project in about a 3 weeks training period. After that, my first developed \n                    site was live - <a href="http://www.solidevents.ca/" target="_blank">SolidEvents</a> (not maintained anymore) - and I got hired.',
                    meta: {
                      from: "5 May 2017",
                      to: new Date().toDateString(),
                      location: "Remote / Home"
                    }
                  },
                  {
                    jobTitle: "Freelancer",
                    company: "Individual",
                    description:
                      'I\'m into web development since I was in highschool, however I really started to learn\n                    more about it since 2015, when I started to develop my own WordPress theme, named\n                    <a href="https://www.wecodeart.com/" target="_blank">WeCodeArt Framework</a>. The idea was simple \n                    - to build something fast and non-bloated with tons of features that you will never use.',
                    meta: {
                      from: "Sep 2015",
                      to: "5 May 2017",
                      location: "Home"
                    }
                  }
                ]
              }),
              a
            );
          }
          return (
            Object(E.a)(t, e),
            Object(b.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  (n = a(218)), this.setState({ scrollmagic: !0 });
                  var e = document.querySelector(".timeline__bar"),
                    t = document.querySelectorAll(".timeline-box"),
                    r = t[0],
                    o = t[t.length - 1],
                    s = function() {
                      var t, a;
                      window.innerWidth < 768
                        ? ((t = r.offsetHeight),
                          (a = r.offsetHeight - r.offsetTop - 65))
                        : ((t = r.offsetHeight / 2), (a = o.offsetHeight / 2)),
                        (e.style.top = t + "px"),
                        (e.style.bottom = a + "px");
                    };
                  s(),
                    setTimeout(function() {
                      window.onresize = function() {
                        return s();
                      };
                    }, 500);
                }
              },
              {
                key: "componentDidUpdate",
                value: function() {
                  this.handleAnimations();
                }
              },
              {
                key: "handleAnimations",
                value: function() {
                  var e = document.querySelectorAll(".timeline-box"),
                    t = document.querySelectorAll(".timeline-box__animation");
                  if (window.innerWidth < 576) {
                    for (var a = 0; a < e.length; a++)
                      t[a].classList.add("timeline-box__animation--ended");
                    for (var r = 0; r < e.length; r++)
                      e[r].classList.add("timeline-box--animated");
                  } else if (!1 !== this.state.scrollmagic)
                    for (var o = new n.Controller(), s = 0; s < e.length; s++)
                      new n.Scene({ triggerElement: t[s], triggerHook: 0.85 })
                        .setClassToggle(t[s], "timeline-box__animation--ended")
                        .addTo(o),
                        new n.Scene({ triggerElement: e[s], triggerHook: 0.8 })
                          .setClassToggle(e[s], "timeline-box--animated")
                          .addTo(o);
                }
              },
              {
                key: "getDaysInMonths",
                value: function(e) {
                  var t = new Date(e.getFullYear(), e.getMonth(), 1);
                  return (
                    (new Date(e.getFullYear(), e.getMonth() + 1, 1) - t) / 864e5
                  );
                }
              },
              {
                key: "renderWorkDuration",
                value: function(e) {
                  var t = e.from,
                    a = e.to,
                    n = new Date(t),
                    r = new Date(a),
                    o = new Date(
                      Date.UTC(
                        r.getUTCFullYear(),
                        r.getUTCMonth(),
                        r.getUTCDate()
                      )
                    ),
                    s = new Date(
                      Date.UTC(
                        n.getUTCFullYear(),
                        n.getUTCMonth(),
                        n.getUTCDate()
                      )
                    ),
                    c = o.getDate() - s.getDate();
                  c < 0 &&
                    (o.setMonth(o.getMonth() - 1),
                    (c += this.getDaysInMonths(o)));
                  var i = o.getMonth() - s.getMonth();
                  i < 0 && (o.setFullYear(o.getFullYear() - 1), (i += 12));
                  var l = o.getFullYear() - s.getFullYear();
                  return (
                    l +
                    (l > 1 ? " years" : " year") +
                    ", " +
                    i +
                    (i > 1 ? " months" : " month") +
                    ", and " +
                    c +
                    (c > 1 ? " days" : " day")
                  );
                }
              },
              {
                key: "renderExperience",
                value: function() {
                  var e = this,
                    t = this.state.experience;
                  if (t.length)
                    return t.map(function(t, a) {
                      var n = t.meta,
                        r = n.from,
                        s = n.to;
                      return o.a.createElement(
                        "article",
                        {
                          id: "timeline-box-".concat(a + 1),
                          className: "timeline-boxes__item timeline-box",
                          key: a
                        },
                        o.a.createElement(
                          "div",
                          { className: "timeline-box__animation" },
                          o.a.createElement(
                            "div",
                            { className: "row" },
                            o.a.createElement(
                              "div",
                              {
                                className:
                                  "timeline-box__meta col col-sm-12 col-md-5 col-lg-4 col-xl-3"
                              },
                              o.a.createElement(
                                "div",
                                { className: "timeline-box__meta-range" },
                                o.a.createElement(
                                  "span",
                                  {
                                    className: "timeline-box__meta-range__from"
                                  },
                                  o.a.createElement(
                                    "span",
                                    { className: "text-uppercase" },
                                    "From"
                                  ),
                                  o.a.createElement(
                                    "span",
                                    {
                                      className:
                                        "timeline-box__meta-range__from-date"
                                    },
                                    r
                                  )
                                ),
                                o.a.createElement(
                                  "span",
                                  { className: "timeline-box__meta-range__to" },
                                  o.a.createElement(
                                    "span",
                                    { className: "text-uppercase" },
                                    "To"
                                  ),
                                  o.a.createElement(
                                    "span",
                                    {
                                      className:
                                        "timeline-box__meta-range__to-date"
                                    },
                                    s === new Date().toDateString()
                                      ? "Present"
                                      : s
                                  )
                                ),
                                o.a.createElement(
                                  "p",
                                  {
                                    className: "timeline-box__meta-range__age"
                                  },
                                  "(",
                                  e.renderWorkDuration({ from: r, to: s }),
                                  ")"
                                )
                              ),
                              o.a.createElement(
                                "div",
                                { className: "timeline-box__meta-company" },
                                o.a.createElement(
                                  "h5",
                                  {
                                    className:
                                      "timeline-box__meta-company__name"
                                  },
                                  t.company
                                ),
                                o.a.createElement(
                                  "span",
                                  {
                                    className: "timeline-box__meta-company__loc"
                                  },
                                  t.meta.location
                                )
                              )
                            ),
                            o.a.createElement(
                              "div",
                              {
                                className:
                                  "timeline-box__content col col-sm-12 col-md-7 col-lg-8 col-xl-9"
                              },
                              o.a.createElement(
                                "h4",
                                { className: "timeline-box__content-headline" },
                                t.jobTitle
                              ),
                              o.a.createElement("p", {
                                className: "timeline-box__content-description",
                                dangerouslySetInnerHTML: {
                                  __html: t.description
                                }
                              })
                            )
                          )
                        )
                      );
                    });
                }
              },
              {
                key: "render",
                value: function() {
                  return o.a.createElement(
                    "section",
                    { id: "about-experience", className: "about-experience" },
                    o.a.createElement(
                      "div",
                      { className: "container" },
                      o.a.createElement(
                        "div",
                        { className: "row" },
                        o.a.createElement(
                          "div",
                          { className: "col" },
                          o.a.createElement(
                            "h2",
                            {
                              className:
                                "about-experience__headline text-uppercase"
                            },
                            "Experience"
                          )
                        )
                      )
                    ),
                    o.a.createElement(
                      "div",
                      { className: "container" },
                      o.a.createElement(
                        "div",
                        { className: "row" },
                        o.a.createElement(
                          "div",
                          { className: "col" },
                          o.a.createElement(
                            "div",
                            {
                              className: "about-experience__timeline timeline"
                            },
                            o.a.createElement("div", {
                              className: "timeline__bar"
                            }),
                            o.a.createElement(
                              "div",
                              { className: "timeline__boxes" },
                              this.renderExperience()
                            )
                          )
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.Component),
        Oe = (function(e) {
          function t() {
            return (
              Object(v.a)(this, t),
              Object(g.a)(this, Object(_.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(E.a)(t, e),
            Object(b.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  window.scrollTo(0, 0);
                }
              },
              {
                key: "render",
                value: function() {
                  var e = "WordPress/React Developer",
                    t = "http://www.iambican.com/";
                  return o.a.createElement(
                    o.a.Fragment,
                    null,
                    o.a.createElement(
                      f.a,
                      null,
                      o.a.createElement("title", null, e),
                      o.a.createElement("link", { rel: "canonical", href: t })
                    ),
                    o.a.createElement(
                      "div",
                      { id: "content", className: "content" },
                      o.a.createElement(we, null),
                      o.a.createElement(je, null)
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.Component),
        Ne = a(56),
        ke = a(84),
        Ce = (function() {
          var e = Object(j.a)(
            w.a.mark(function e(t) {
              return w.a.wrap(
                function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          t.fetchDispatcher(
                            "wp/v2/pages",
                            { slug: t.match.params.slug },
                            { success: k.e }
                          )
                        );
                      case 2:
                        return e.abrupt("return", e.sent);
                      case 3:
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
        })(),
        xe = (function(e) {
          function t() {
            return (
              Object(v.a)(this, t),
              Object(g.a)(this, Object(_.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(E.a)(t, e),
            Object(b.a)(t, [
              {
                key: "componentWillReceiveProps",
                value: function(e) {
                  if (this.props.location.pathname !== e.location.pathname) {
                    var t = { slug: e.match.params.slug };
                    this.props.fetchDispatcher("wp/v2/pages", t, {
                      success: k.e
                    });
                  }
                }
              },
              {
                key: "componentDidUpdate",
                value: function() {
                  window.scrollTo(0, 0);
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props.posts[0],
                    t = e && e.title.rendered,
                    a = {
                      title: t,
                      canonical:
                        "http://www.iambican.com" + this.props.location.pathname
                    };
                  return o.a.createElement(
                    o.a.Fragment,
                    null,
                    o.a.createElement(
                      f.a,
                      null,
                      o.a.createElement("title", null, a.title),
                      o.a.createElement("link", {
                        rel: "canonical",
                        href: a.canonical
                      })
                    ),
                    o.a.createElement(
                      "div",
                      { id: "content", className: "content content--page" },
                      o.a.createElement(Ne.a, { pageTitle: t }),
                      o.a.createElement(ke.a, {
                        posts: this.props.posts,
                        isSingle: !0
                      })
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.Component),
        Se = Object(l.connect)(
          function(e) {
            var t = e.api;
            return { posts: (t = void 0 === t ? [] : t).posts };
          },
          function(e) {
            return Object(x.b)({ fetchDispatcher: k.j }, e);
          }
        )(Object(m.frontloadConnect)(Ce, { onMount: !0, onUpdate: !1 })(xe)),
        Me = function() {
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              f.a,
              null,
              o.a.createElement("title", null, "Pshht - not found | I Am Bican")
            ),
            o.a.createElement(
              "div",
              { id: "content", className: "content content--404 text-center" },
              o.a.createElement(Ne.a, { pageTitle: "404 - Not Found" }),
              o.a.createElement(
                "div",
                { className: "container" },
                o.a.createElement(
                  "div",
                  { className: "row" },
                  o.a.createElement(
                    "div",
                    { className: "col text-center py-5" },
                    o.a.createElement(
                      "p",
                      null,
                      "The page you requested is not found."
                    )
                  )
                )
              )
            )
          );
        },
        Te = a(40),
        Le = c()({
          loader: function() {
            return a.e(1).then(a.bind(null, 223));
          },
          loading: Te.a,
          modules: ["portfolio"]
        }),
        Ie = [
          { path: "/", exact: !0, component: Oe },
          {
            path: "/portfolio",
            exact: !0,
            component: c()({
              loader: function() {
                return a.e(2).then(a.bind(null, 224));
              },
              loading: Te.a,
              modules: ["projects"]
            })
          },
          { path: "/portfolio/:slug", exact: !0, component: Le },
          { path: "/p/:slug", component: Se },
          { path: "*", component: Me }
        ],
        De = function() {
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              f.a,
              { titleTemplate: "%s - IAmBican" },
              o.a.createElement("title", null, "Howdy"),
              o.a.createElement("meta", {
                name: "description",
                content:
                  "WordPress/React Developer at myZone/AM2Studio. You can now hire me for your website/projects."
              })
            ),
            o.a.createElement(J, null),
            o.a.createElement(
              ie.a,
              null,
              Ie.map(function(e, t) {
                var a = e.path,
                  n = e.exact,
                  r = e.component,
                  s = Object(p.a)(e, ["path", "exact", "component"]);
                return o.a.createElement(le.a, {
                  key: t,
                  path: a,
                  exact: n,
                  render: function(e) {
                    return o.a.createElement(r, Object.assign({}, e, s));
                  }
                });
              })
            ),
            o.a.createElement(ce, null)
          );
        },
        Ae = (a(219), Object(d.a)()),
        Fe = Ae.store,
        Pe = Ae.history,
        Ue = o.a.createElement(
          l.Provider,
          { store: Fe },
          o.a.createElement(
            u.ConnectedRouter,
            { history: Pe },
            o.a.createElement(
              m.Frontload,
              { noServerRender: !0 },
              o.a.createElement(De, null)
            )
          )
        ),
        Be = document.getElementById("wecodeartReact");
      !0 === Be.hasChildNodes()
        ? c.a.preloadReady().then(function() {
            Object(i.hydrate)(Ue, Be);
          })
        : Object(i.render)(Ue, Be);
    },
    28: function(e, t, a) {
      "use strict";
      a.d(t, "a", function() {
        return n;
      }),
        a.d(t, "c", function() {
          return r;
        }),
        a.d(t, "d", function() {
          return o;
        }),
        a.d(t, "b", function() {
          return s;
        });
      var n = function(e) {
          return [].reduce.call(
            e.elements,
            function(e, t) {
              return "" !== t.value && (e[t.name] = t.value), e;
            },
            {}
          );
        },
        r = function(e) {
          return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            String(e).toLowerCase()
          );
        },
        o = function(e) {
          for (var t = 0; t < e.length; t++)
            if (e[t].hasAttribute("required") && "" === e[t].value) return !1;
          return !0;
        },
        s = function(e) {
          var t = "";
          for (var a in e)
            "" !== t && (t += "&"),
              (t += encodeURIComponent(a) + "=" + encodeURIComponent(e[a]));
          return t;
        };
    },
    29: function(e, t, a) {
      "use strict";
      a.d(t, "d", function() {
        return o;
      }),
        a.d(t, "a", function() {
          return s;
        }),
        a.d(t, "c", function() {
          return c;
        }),
        a.d(t, "b", function() {
          return i;
        });
      var n = a(59),
        r = a.n(n),
        o = function(e) {
          return localStorage.setItem("authToken", e);
        },
        s = function() {
          return localStorage.getItem("authToken");
        },
        c = function() {
          return localStorage.removeItem("authToken");
        };
      function i() {
        try {
          var e = s();
          if (e && e.length) {
            var t = r()(e),
              a = new Date().getTime() / 1e3;
            return !(t.exp < a);
          }
          return !1;
        } catch (n) {
          return !1;
        }
      }
    },
    3: function(e, t, a) {
      "use strict";
      a.d(t, "a", function() {
        return p;
      }),
        a.d(t, "d", function() {
          return h;
        }),
        a.d(t, "g", function() {
          return f;
        }),
        a.d(t, "h", function() {
          return v;
        }),
        a.d(t, "e", function() {
          return b;
        }),
        a.d(t, "b", function() {
          return g;
        }),
        a.d(t, "c", function() {
          return _;
        }),
        a.d(t, "f", function() {
          return E;
        }),
        a.d(t, "i", function() {
          return y;
        }),
        a.d(t, "k", function() {
          return N;
        }),
        a.d(t, "l", function() {
          return C;
        }),
        a.d(t, "j", function() {
          return S;
        });
      var n = a(14),
        r = a.n(n),
        o = a(24),
        s = a(30),
        c = a(78),
        i = a.n(c),
        l = a(59),
        u = a.n(l),
        m = a(110),
        d = a(28),
        p = "FETCHING",
        h = "FETCH_MENU_FULFILLED",
        f = "FETCH_USER_FULFILLED",
        v = "LOGOUT_USER",
        b = "FETCH_POSTS_FULFILLED",
        g = "FETCH_CLIENTS_FULFILLED",
        _ = "FETCH_MEDIA_FULFILLED",
        E = "FETCH_REJECTED",
        y = "SET_HAS_MORE_POSTS",
        w = m.a.REST;
      i.a.defaults.baseURL = w;
      var j = { baseURL: w },
        O = i.a.create(j);
      function N(e) {
        return k.apply(this, arguments);
      }
      function k() {
        return (k = Object(s.a)(
          r.a.mark(function e(t) {
            var a, n, o;
            return r.a.wrap(
              function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((a = t.username), (n = t.password), !a || !n)) {
                        e.next = 12;
                        break;
                      }
                      return (
                        (o = {
                          method: "post",
                          url: "jwt-auth/v1/token",
                          data: Object(d.b)({ username: a, password: n })
                        }),
                        (e.prev = 3),
                        (e.next = 6),
                        O(o).then(function(e) {
                          return e.data;
                        })
                      );
                    case 6:
                      return e.abrupt("return", e.sent);
                    case 9:
                      (e.prev = 9), (e.t0 = e.catch(3)), console.log(e.t0);
                    case 12:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[3, 9]]
            );
          })
        )).apply(this, arguments);
      }
      function C(e) {
        return x.apply(this, arguments);
      }
      function x() {
        return (x = Object(s.a)(
          r.a.mark(function e(t) {
            var a, n, o;
            return r.a.wrap(
              function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((a = { Authorization: "Bearer ".concat(t) }), !t)) {
                        e.next = 13;
                        break;
                      }
                      return (
                        (n = u()(t)),
                        (o = n.data.user.id),
                        (e.prev = 4),
                        (e.next = 7),
                        O.get("wp/v2/users/" + o, {
                          headers: a,
                          withCredentials: !0
                        }).then(function(e) {
                          return e.data;
                        })
                      );
                    case 7:
                      return e.abrupt("return", e.sent);
                    case 10:
                      (e.prev = 10), (e.t0 = e.catch(4)), console.log(e.t0);
                    case 13:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[4, 10]]
            );
          })
        )).apply(this, arguments);
      }
      function S() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          a =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          n =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return function(r) {
          var s = Object(d.b)(t);
          return (
            s && (e = e.concat("?", s)),
            r({ type: p, payload: !0 }),
            O.get(e, Object(o.a)({}, n))
              .then(function(e) {
                return r({ type: a.success, payload: e.data });
              })
              .catch(function(e) {
                return r({ type: a.failed ? a.failed : E, payload: e });
              })
          );
        };
      }
    },
    40: function(e, t, a) {
      "use strict";
      var n = a(1),
        r = a.n(n),
        o = a(130),
        s = a.n(o);
      t.a = function(e) {
        e.type, e.color;
        return r.a.createElement(
          "div",
          { className: "download-loader" },
          r.a.createElement(s.a, {
            type: "bubbles",
            color: "#08c",
            height: "100%",
            width: "100%"
          })
        );
      };
    },
    56: function(e, t, a) {
      "use strict";
      var n = a(125),
        r = a(1),
        o = a.n(r);
      t.a = function(e) {
        var t = Object(n.a)({}, e).pageTitle;
        return o.a.createElement(
          "section",
          { className: "page-intro" },
          o.a.createElement("div", { className: "page-intro__background" }),
          o.a.createElement(
            "div",
            { className: "container" },
            o.a.createElement(
              "div",
              { className: "row" },
              o.a.createElement(
                "div",
                { className: "col" },
                o.a.createElement(
                  "h1",
                  { className: "page-intro__headline" },
                  t || "Lorem ipsum dolor sit"
                )
              )
            )
          )
        );
      };
    },
    61: function(e, t, a) {
      "use strict";
      var n = a(13),
        r = a(16),
        o = a(109),
        s = a(132),
        c = (a(181), a(51)),
        i = a(17),
        l = a(24),
        u = a(3),
        m = a(31),
        d = {
          user: { authentificated: !1 },
          posts: [],
          menus: [],
          fetching: !1,
          hasMorePosts: !1,
          error: null
        };
      function p() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case u.a:
            return Object(l.a)({}, e, { fetching: !0 });
          case u.f:
            return Object(l.a)({}, e, { fetching: !1, error: t.payload });
          case u.g:
            var a = e.user;
            return (
              (a.authentificated = !0),
              Object(l.a)({}, e, {
                fetching: !1,
                user: Object(l.a)({}, a, t.payload)
              })
            );
          case u.h:
            var n = d.user;
            return (
              (n.authentificated = !1),
              Object(l.a)({}, e, { fetching: !1, user: n })
            );
          case u.e:
            return Object(l.a)({}, e, {
              fetching: !1,
              posts: !!t.payload.length && t.payload
            });
          case u.b:
            return Object(l.a)({}, e, {
              fetching: !1,
              clients: !!t.payload.length && t.payload
            });
          case u.c:
            var r = e.posts,
              o = Object(m.find)(r, { featured_media: t.payload.id }),
              s = Object(m.findIndex)(r, { featured_media: t.payload.id });
            return (
              (o.featured_object = t.payload),
              r.splice(s, 1, o),
              Object(l.a)({}, e, { fetching: !1, posts: r })
            );
          case u.d:
            var c = e.menus;
            return (
              void 0 === c && (c = [t.payload]),
              Object(l.a)({}, e, {
                fetching: !1,
                menus: Object(i.a)(c).concat([t.payload])
              })
            );
          case u.i:
            return Object(l.a)({}, e, {
              fetching: !1,
              hasMorePosts: t.payload
            });
          default:
            return e;
        }
      }
      var h = !(
        "undefined" !== typeof window &&
        window.document &&
        window.document.createElement
      );
      t.a = function() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "/",
          t = h ? Object(n.c)({ initialEntries: [e] }) : Object(n.a)(),
          a = [Object(c.routerMiddleware)(t), Object(s.a)(), o.a],
          i = h ? {} : window.__PRELOADED_STATE__;
        return (
          h || delete window.__PRELOADED_STATE__,
          {
            store: Object(r.e)(
              Object(r.c)({ router: Object(c.connectRouter)(t), api: p }),
              i,
              r.d.apply(void 0, [r.a.apply(void 0, a)].concat([]))
            ),
            history: t
          }
        );
      };
    },
    62: function(e, t, a) {
      e.exports = a.p + "static/media/placeholder-bold.81ba79bb.png";
    },
    80: function(e, t, a) {
      e.exports = a.p + "static/media/user.07e599b6.svg";
    },
    84: function(e, t, a) {
      "use strict";
      var n = a(17),
        r = a(4),
        o = a(5),
        s = a(7),
        c = a(6),
        i = a(8),
        l = a(1),
        u = a.n(l),
        m = a(212),
        d = a(222),
        p = a(31),
        h = void 0,
        f = Object(d.a)(function(e) {
          var t = e.type,
            a = e.slug,
            n = u.a.createElement("h1", {
              className: "entry__title",
              dangerouslySetInnerHTML: (function(e) {
                if (e) return { __html: e.title.rendered };
              })(e)
            });
          return u.a.createElement(
            "header",
            { className: "entry__header" },
            e.isSingle
              ? n
              : u.a.createElement(m.a, { to: "".concat(t, "/").concat(a) }, n)
          );
        }),
        v = (function(e) {
          function t() {
            return (
              Object(r.a)(this, t),
              Object(s.a)(this, Object(c.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(i.a)(t, e),
            Object(o.a)(t, [
              {
                key: "getClasses",
                value: function() {
                  return ["entry__content"].join(" ");
                }
              },
              {
                key: "getContent",
                value: function() {
                  return this.props.isSingle
                    ? (function(e) {
                        if (e)
                          return e.content.protected
                            ? {
                                __html:
                                  "<p>This content is password-protected.</p>"
                              }
                            : { __html: e.content.rendered };
                      })(this.props)
                    : (function(e) {
                        if (e)
                          return e.excerpt
                            ? e.excerpt.protected
                              ? {
                                  __html:
                                    "<p>This content is password-protected.</p>"
                                }
                              : "image" !== e.format || e.excerpt.rendered
                              ? { __html: e.excerpt.rendered }
                              : { __html: e.content.rendered }
                            : {
                                __html:
                                  "<p>" +
                                  h
                                    .getContent(e)
                                    .__html.replace(/<\/?[^>]+(>|$)/g, "")
                                    .substring(0, 250) +
                                  "</p>"
                              };
                      })(this.props);
                }
              },
              {
                key: "render",
                value: function() {
                  return u.a.createElement("div", {
                    className: this.getClasses(),
                    dangerouslySetInnerHTML: this.getContent()
                  });
                }
              }
            ]),
            t
          );
        })(l.Component),
        b = (function(e) {
          function t() {
            return (
              Object(r.a)(this, t),
              Object(s.a)(this, Object(c.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(i.a)(t, e),
            Object(o.a)(t, [
              {
                key: "getClasses",
                value: function() {
                  var e = ["entry"];
                  return (
                    e.push(
                      this.props.isSingle ? "entry--single" : "entry--archive"
                    ),
                    e.push(this.props.type && "entry--" + this.props.type),
                    e.join(" ")
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  return u.a.createElement(
                    "article",
                    { className: this.getClasses() },
                    !this.props.isSingle && u.a.createElement(f, this.props),
                    u.a.createElement(v, this.props)
                  );
                }
              }
            ]),
            t
          );
        })(l.Component),
        g = a(19),
        _ = a(126),
        E = a.n(_),
        y = a(127),
        w = a.n(y),
        j = a(128),
        O = a.n(j),
        N = a(129),
        k = a.n(N),
        C = { clock: E.a, banknote: w.a, website: O.a, money: k.a },
        x = function(e) {
          var t = e.date_gmt,
            a = e.date_human,
            r = e.acf.meta,
            o = r ? parseInt(r.cost) : 0,
            s = Object(n.a)(Array(o));
          s = s.map(function(e, t) {
            return u.a.createElement(g.a, {
              className: "portfolio__cost-svg",
              key: t,
              src: C.banknote,
              svgClassName: "svg-icon svg-icon--cost"
            });
          });
          var c = '<a target="_blank" href="'.concat(
            r ? r.website : "#",
            '">Live Site</a>'
          );
          return u.a.createElement(
            "div",
            { className: "portfolio__meta" },
            u.a.createElement(
              "span",
              { className: "portfolio__meta-item", title: "Live url" },
              u.a.createElement(g.a, {
                className: "portfolio__meta-label",
                src: C.website,
                svgClassName: "svg-icon svg-icon--portfolio-meta"
              }),
              u.a.createElement("span", {
                className: "portfolio__website",
                dangerouslySetInnerHTML: { __html: c }
              })
            ),
            u.a.createElement(
              "span",
              { className: "portfolio__meta-item", title: "Cost range" },
              u.a.createElement(g.a, {
                className: "portfolio__meta-label",
                src: C.money,
                svgClassName: "svg-icon svg-icon--portfolio-meta"
              }),
              u.a.createElement(
                "span",
                { className: "portfolio__cost" },
                o > 0 ? s : "Free"
              )
            ),
            u.a.createElement(
              "span",
              { className: "portfolio__meta-item", title: "Went live on:" },
              u.a.createElement(g.a, {
                className: "portfolio__meta-label",
                src: C.clock,
                svgClassName: "svg-icon svg-icon--portfolio-meta"
              }),
              u.a.createElement(
                "time",
                { className: "portfolio__date", dateTime: t },
                a
              )
            )
          );
        },
        S = a(14),
        M = a.n(S),
        T = a(30),
        L = a(15),
        I = a(3),
        D = a(40),
        A = a(62),
        F = a.n(A),
        P = a(16),
        U = a(34),
        B = (function() {
          var e = Object(T.a)(
            M.a.mark(function e(t) {
              return M.a.wrap(
                function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          t.fetchDispatcher(
                            "wp/v2/media/" + t.mediaId,
                            {},
                            { success: I.c }
                          )
                        );
                      case 2:
                        return e.abrupt("return", e.sent);
                      case 3:
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
        })(),
        H = (function(e) {
          function t() {
            return (
              Object(r.a)(this, t),
              Object(s.a)(this, Object(c.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(i.a)(t, e),
            Object(o.a)(t, [
              {
                key: "componentWillReceiveProps",
                value: function(e) {
                  void 0 === e.fetchedMedia &&
                    this.props.fetchDispatcher(
                      "wp/v2/media/" + this.props.mediaId,
                      {},
                      { success: I.c }
                    );
                }
              },
              {
                key: "getMediaImage",
                value: function(e) {
                  var t = e.media_details.sizes.medium_large;
                  return t ? t.source_url : F.a;
                }
              },
              {
                key: "getClasses",
                value: function() {
                  var e = ["entry__media", "box-shadow", "box-shadow--big"],
                    t = this.props.fetchedMedia,
                    a = (t ? t.media_details.sizes : {}).medium_large;
                  return (
                    (a ? a.source_url : F.a) === F.a &&
                      e.push(["entry__media--placeholder"]),
                    e.join(" ")
                  );
                }
              },
              {
                key: "renderImage",
                value: function(e) {
                  var t = this.getMediaImage(e),
                    a = {
                      backgroundImage: "url('".concat(t, "')"),
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                    };
                  return u.a.createElement("div", {
                    className: "entry__media-figure__src",
                    style: a
                  });
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props.fetchedMedia;
                  return u.a.createElement(
                    "div",
                    { className: this.getClasses() },
                    e ? this.renderImage(e) : u.a.createElement(D.a, null)
                  );
                }
              }
            ]),
            t
          );
        })(l.Component),
        q = Object(L.connect)(
          function(e, t) {
            var a = e.api.posts;
            return {
              fetchedMedia: Object(p.find)(a, { featured_media: t.mediaId })
                .featured_object
            };
          },
          function(e) {
            return Object(P.b)({ fetchDispatcher: I.j }, e);
          }
        )(Object(U.frontloadConnect)(B, { onMount: !0, onUpdate: !1 })(H)),
        R = (function(e) {
          function t() {
            return (
              Object(r.a)(this, t),
              Object(s.a)(this, Object(c.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(i.a)(t, e),
            Object(o.a)(t, [
              {
                key: "getClasses",
                value: function() {
                  var e = ["entry", "entry--portfolio"];
                  return (
                    e.push(
                      this.props.isSingle ? "entry--single" : "entry--archive"
                    ),
                    e.push("portfolio"),
                    e.join(" ")
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props.featured_media;
                  return u.a.createElement(
                    "article",
                    { className: this.getClasses() },
                    u.a.createElement(
                      "div",
                      { className: "row" },
                      !this.props.isSingle &&
                        u.a.createElement(
                          "div",
                          { className: "col-sm-12 col-lg-5" },
                          u.a.createElement(q, { mediaId: e })
                        ),
                      u.a.createElement(
                        "div",
                        { className: "col" },
                        !this.props.isSingle &&
                          u.a.createElement(f, this.props),
                        this.props.isSingle && u.a.createElement(x, this.props),
                        u.a.createElement(v, this.props),
                        !this.props.isSingle && u.a.createElement(x, this.props)
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(l.Component),
        W = function() {
          return u.a.createElement(
            "article",
            { className: "entry entry--empty" },
            u.a.createElement(D.a, null)
          );
        },
        Y = (function(e) {
          function t() {
            return (
              Object(r.a)(this, t),
              Object(s.a)(this, Object(c.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(i.a)(t, e),
            Object(o.a)(t, [
              {
                key: "isSingle",
                value: function() {
                  var e = this.props,
                    t = e.posts,
                    a = e.isSingle;
                  return a || 1 === t.length;
                }
              },
              {
                key: "getClasses",
                value: function() {
                  var e = ["col", "main"];
                  return (
                    e.push(this.isSingle() ? "main--single" : "main--archive"),
                    e.join(" ")
                  );
                }
              },
              {
                key: "renderPosts",
                value: function() {
                  var e = this,
                    t = this.props.posts;
                  return t.length
                    ? t.map(function(t) {
                        var a;
                        switch (t.type) {
                          case "portfolio":
                            a = u.a.createElement(
                              R,
                              Object.assign({ key: t.id }, t, {
                                isSingle: e.isSingle()
                              })
                            );
                            break;
                          default:
                            a = u.a.createElement(
                              b,
                              Object.assign({ key: t.id }, t, {
                                isSingle: e.isSingle()
                              })
                            );
                        }
                        return a;
                      })
                    : (this.isSingle()
                        ? Object(n.a)(Array(1))
                        : Object(n.a)(Array(6))
                      ).map(function(e, t) {
                        return u.a.createElement(W, { key: t });
                      });
                }
              },
              {
                key: "render",
                value: function() {
                  return u.a.createElement(
                    "div",
                    { className: "container" },
                    u.a.createElement(
                      "div",
                      { className: "row" },
                      u.a.createElement(
                        "main",
                        { id: "postsContainer", className: this.getClasses() },
                        this.renderPosts()
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(l.Component);
      t.a = Y;
    }
  },
  [[133, 5, 4]]
]);
//# sourceMappingURL=main.bf2a8038.chunk.js.map
