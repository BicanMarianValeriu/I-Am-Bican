(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    219: function(t, e, n) {
      "use strict";
      n.r(e);
      var a = n(5),
        c = n(6),
        r = n(8),
        o = n(7),
        i = n(9),
        s = n(17),
        p = n.n(s),
        l = n(29),
        u = n(1),
        m = n.n(u),
        h = n(34),
        f = n.n(h),
        d = n(56),
        w = n(84),
        b = n(4),
        v = n(23),
        j = n(18),
        O = n(33),
        E = (function() {
          var t = Object(l.a)(
            p.a.mark(function t(e) {
              return p.a.wrap(
                function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.next = 2),
                          e.fetchDispatcher(
                            "wp/v2/portfolio",
                            { slug: e.match.params.slug },
                            { success: b.e }
                          )
                        );
                      case 2:
                        return t.abrupt("return", t.sent);
                      case 3:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                this
              );
            })
          );
          return function(e) {
            return t.apply(this, arguments);
          };
        })(),
        g = (function(t) {
          function e() {
            return (
              Object(a.a)(this, e),
              Object(r.a)(this, Object(o.a)(e).apply(this, arguments))
            );
          }
          return (
            Object(i.a)(e, t),
            Object(c.a)(e, [
              {
                key: "componentWillReceiveProps",
                value: function(t) {
                  if (this.props.location.pathname !== t.location.pathname) {
                    var e = { slug: t.match.params.slug };
                    this.props.fetchDispatcher("wp/v2/portfolio", e, {
                      success: b.e
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
                  var t = this.props.posts[0],
                    e = this.props.location.pathname,
                    n = {
                      title:
                        (t && t.yoast_meta.title) || (t && t.title.rendered),
                      description: t && t.yoast_meta.description,
                      canonical: "http://www.iambican.com" + e
                    };
                  return m.a.createElement(
                    m.a.Fragment,
                    null,
                    m.a.createElement(
                      f.a,
                      null,
                      m.a.createElement("title", null, n.title),
                      m.a.createElement("link", {
                        rel: "canonical",
                        href: n.canonical
                      }),
                      n.description &&
                        m.a.createElement("meta", {
                          name: "description",
                          content: n.description
                        })
                    ),
                    m.a.createElement(
                      "div",
                      { id: "content", className: "content" },
                      m.a.createElement(d.a, {
                        pageTitle: t && t.title.rendered
                      }),
                      m.a.createElement(w.a, {
                        posts: this.props.posts,
                        isSingle: !0
                      })
                    )
                  );
                }
              }
            ]),
            e
          );
        })(u.Component);
      e.default = Object(v.connect)(
        function(t) {
          return { posts: t.api.posts };
        },
        function(t) {
          return Object(j.b)({ fetchDispatcher: b.j }, t);
        }
      )(Object(O.frontloadConnect)(E, { onMount: !0, onUpdate: !1 })(g));
    }
  }
]);
//# sourceMappingURL=portfolio.30e9ad54.chunk.js.map
