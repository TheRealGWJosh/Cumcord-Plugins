	(function(C, L, R, y, _) {
		"use strict"; function w(o) {
			const t=(o&16711680)>>>16, c=(o&65280)>>>8, s=o&255; return {
				r: t, g:c, b:s
			}
		}

		function P(o, t=1) {
			const {
				r: c, g:s, b:f
			}

			=w(o); return t===1?`rgb($ {
				c
			}

			, $ {
				s
			}

			, $ {
				f
			}

			)`:`rgba($ {
				c
			}

			, $ {
				s
			}

			, $ {
				f
			}

			, $ {
				t
			}

			)`
		}

		function $(o) {
			return((o[0]<<8)+o[1]<<8)+o[2]
		}

		var E=Object.defineProperty, g=Object.getOwnPropertySymbols, U=Object.prototype.hasOwnProperty, A=Object.prototype.propertyIsEnumerable, h=(o, t, c)=>t in o?E(o, t, {
			enumerable: !0, configurable:!0, writable:!0, value:c
		}

		):o[t]=c, O=(o, t)=> {
			for(var c in t||(t= {}
			))U.call(t, c)&&h(o, c, t[c]); if(g)for(var c of g(t))A.call(t, c)&&h(o, c, t[c]); return o
		}

		; typeof require!="undefined"&&require; const d=["message-2qnXI6", "container-2Pjhx-", "containerDefault--pIXnN", "labelContainer-1BLJti", "item-PXvHYJ", "channel-2QD9_O", "content-1x5b-n", "listRow-hutiT_", "resultFocused-3aIoYe", "item-2J2GlB", "actionButton-VzECiy", "autocompleteRowVertical-q1K4ky"]; let m=[]; var T=o=> {
			const t= {}
			, c=o.persist.store, s=o.persist.ghost, f=y.webpack.findByDisplayName("PeopleListItem"), j=y.webpack.findByProps("getPrimaryColorForAvatar"); function p(e) {
				return function(l) {
					l=l||window.event; let n=l.target||l.srcElement, a=!1; for(let r=0; r<d.length; r++)if(n.classList.contains(d[r])) {
						a=!0; break
					}

					for(let r=0; r<4&&!a; r++)if(n.parentElement!=null) {
						n=n.parentElement; for(let i=0; i<d.length&&!a; i++)n.classList.contains(d[i])&&(a=!0)
					}

					if(a) {
						const r=n.getBoundingClientRect(); let i=l.clientX-r.left, u=l.clientY-r.top; i-=r.width/2, u-=r.height/2, n.style.setProperty(`--$ {
							e
						}

						X`, `$ {
							i
						}

						px`), n.style.setProperty(`--$ {
							e
						}

						Y`, `$ {
							u
						}

						px`)
					}
				}
			}

			function v(e, l) {
				let n=null, a=!1, r=null; (l==null?void 0: l.accentColorGenerated)&&(r=$(l.accentColorGenerated)), t[e.id]?n=t[e.id]:(n=s[userId], n||(n= {
					bannerURL:null, accentColor:null, autoAccent:null
				}

				)), !(e.bannerURL==null&&e.accentColor==null)&&e.bannerURL!=n.bannerURL&&(n.bannerURL=e.bannerURL, a=!0), e.accentColor&&e.accentColor!=n.accentColor&&(n.accentColor=e.accentColor, a=!0), (l==null?void 0:l.accentColorGenerated)&&r!=n.autoAccent&&(n.autoAccent=r, a=!0), a&&(c[e.id]=n, t[e.id]=n, console.log("[Hyblocker's Theme Helper]", `Cached user "${e.username}#${e.discriminator}"!`))
			}

			function x(e) {
				return t[e]||(t[e]=s[e], t[e]||(t[e]= {
					bannerURL: null, accentColor:null, autoAccent:null
				}

				)), t[e]
			}

			return {
				onLoad() {
					document.body.addEventListener("mousemove", p("mouse")), document.body.addEventListener("mousedown", p("click")), m.push(R.after("render", f.prototype, (e, l)=> {
						var n; try {
							const a=l.props.children(), r=(n=L.findInReactTree(a, b=>b&&b.user))==null?void 0: n.user, i=x(r.id); let u=null; r.accentColor?(u=r.accentColor, v(r)):i.accentColor?u=i.accentColor:(j.getPrimaryColorForAvatar(r.getAvatarURL()).then(b=>v(r, {
								accentColorGenerated: b
							}

							)), u=i.autoAccent), u=P(u); const B=_.React.cloneElement(a.props.children, {
								role:"listitem", "data-list-item-id":`people-list___$ {
									r.id
								}

								`, tabindex:-1, "data-user-id":r.id, "data-banner-url":i.bannerURL, "data-accent-color":u, style:O( {
									"--user-banner":i.bannerURL?`url("${i.bannerURL}")`: null, "--user-accent-color":u
								}

								, a.props.children.props.style)
							}

							); return l.props.children=()=>B, l
						}

						catch(a) {
							return C.log(`[FATAL]: $ {
								a
							}

							`), l
						}
					}

					))
				}

				,
				onUnload() {
					document.body.removeEventListener("mousemove",
					p("mouse")),
					document.body.removeEventListener("mousedown",
					p("click")); for(let e=0; e<m.length; e + + )m[e](); m.length=0
				}
			}
		}

		; return T
	}

	)(cumcord.utils.logger,
	cumcord.utils,
	cumcord.patcher,
	cumcord.modules,
	cumcord.modules.common);
