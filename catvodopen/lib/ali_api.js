const y = b;
(function (d, e) {
    const x = b,
        f = d();
    while (!![]) {
        try {
            const g = -parseInt(x(0x2ba)) / 0x1 * (-parseInt(x(0x2e5)) / 0x2) + parseInt(x(0x304)) / 0x3 * (parseInt(x(0x313)) / 0x4) + -parseInt(x(0x2c0)) / 0x5 * (parseInt(x(0x213)) / 0x6) + parseInt(x(0x248)) / 0x7 * (parseInt(x(0x339)) / 0x8) + parseInt(x(0x25e)) / 0x9 + -parseInt(x(0x268)) / 0xa * (parseInt(x(0x1ef)) / 0xb) + parseInt(x(0x288)) / 0xc;
            if (g === e) break;
            else f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, 0x9f8b9));
import {
    _,
    jinja2
} from './cat.js';
import * as c from './utils.js';
class User {
    ['driveId'] = '';
    [y(0x21b)] = '';
    [y(0x2b5)] = '';
    ['accessToken'] = '';
    [y(0x291)] = '';
    static [y(0x215)](d) {
        const z = y,
            e = {
                'UvHZQ': z(0x34c),
                'ZITdS': z(0x2b3),
                'geopG': z(0x1f4)
            };
        if (_[z(0x25d)](d)) return new User();
        let f = JSON[z(0x2cd)](d),
            g = new User();
        return g[z(0x328)] = f[e[z(0x1fe)]], g[z(0x21b)] = f[e[z(0x208)]], g[z(0x2b5)] = f[z(0x20f)], g[z(0x28b)] = f[z(0x309)], g['refreshToken'] = f[e[z(0x249)]], g;
    }
    constructor() { } [y(0x33b)]() {
        const A = y;
        return _[A(0x25d)](this[A(0x328)]) ? '' : this[A(0x328)];
    } ['getUserId']() {
        const B = y;
        return _[B(0x25d)](this['userId']) ? '' : this[B(0x21b)];
    } ['getTokenType']() {
        const C = y;
        return _[C(0x25d)](this[C(0x2b5)]) ? '' : this[C(0x2b5)];
    } [y(0x27d)]() {
        const D = y;
        return _[D(0x25d)](this[D(0x28b)]) ? '' : this[D(0x28b)];
    } [y(0x232)]() {
        const E = y;
        return _[E(0x25d)](this[E(0x291)]) ? '' : this['refreshToken'];
    } [y(0x2c2)](d) {
        const F = y;
        this[F(0x291)] = d;
    } [y(0x202)]() {
        const G = y,
            d = {
                'uUrFz': function (e, f) {
                    return e + f;
                }
            };
        return d['uUrFz'](d[G(0x2f4)](this[G(0x347)](), '\x20'), this[G(0x27d)]());
    } [y(0x22f)]() {
        const H = y,
            d = {
                'CUdfL': function (e, f) {
                    return e > f;
                },
                'sMnPj': function (e, f) {
                    return e > f;
                }
            };
        return d['CUdfL'](this[H(0x347)]()[H(0x32e)], 0x0) && d[H(0x2ae)](this[H(0x27d)]()[H(0x32e)], 0x0);
    } [y(0x333)]() {
        const I = y;
        return this[I(0x291)] = '', this[I(0x28b)] = '', this;
    }
    async [y(0x257)]() {
        const J = y,
            d = {
                'aXHJZ': J(0x20b),
                'KqjOy': J(0x20a)
            };
        return await local[J(0x200)](d[J(0x2e1)], d[J(0x2c8)], this[J(0x2f8)]()), this;
    } [y(0x2f8)]() {
        const K = y;
        var d = {
            'default_drive_id': this[K(0x33b)](),
            'user_id': this[K(0x316)](),
            'token_type': this[K(0x347)](),
            'access_token': this['getAccessToken'](),
            'refresh_token': this[K(0x232)]()
        };
        return JSON[K(0x279)](d);
    }
}
class OAuth {
    [y(0x2b5)] = '';
    [y(0x28b)] = '';
    [y(0x291)] = '';
    static ['objectFrom'](d) {
        const L = y,
            e = {
                'KLrmp': L(0x2a2),
                'bOOXF': L(0x20f),
                'winPW': L(0x309)
            };
        console['log'](e[L(0x30f)]), console[L(0x24d)](d);
        if (_[L(0x25d)](d)) return new OAuth();
        let f = JSON['parse'](d),
            g = new OAuth();
        return g[L(0x2b5)] = f[e['bOOXF']], g['accessToken'] = f[e['winPW']], g['refreshToken'] = f[L(0x1f4)], g;
    } ['getTokenType']() {
        const M = y;
        return _[M(0x25d)](this[M(0x2b5)]) ? '' : this[M(0x2b5)];
    } [y(0x27d)]() {
        const N = y;
        return _['isEmpty'](this[N(0x28b)]) ? '' : this[N(0x28b)];
    } [y(0x232)]() {
        const O = y;
        return _[O(0x25d)](this[O(0x291)]) ? '' : this[O(0x291)];
    } [y(0x202)]() {
        const P = y,
            d = {
                'mkUgB': function (e, f) {
                    return e + f;
                }
            };
        return d[P(0x289)](this[P(0x347)](), '\x20') + this[P(0x27d)]();
    } [y(0x333)]() {
        const Q = y;
        return this[Q(0x291)] = '', this[Q(0x28b)] = '', this;
    }
    async [y(0x257)]() {
        const R = y,
            d = {
                'EQTvw': R(0x201)
            };
        return await local['set'](R(0x20b), d[R(0x27a)], this[R(0x2f8)]()), this;
    } [y(0x2f8)]() {
        const S = y;
        var d = {
            'token_type': this[S(0x347)](),
            'access_token': this[S(0x27d)](),
            'refresh_token': this['getRefreshToken']()
        };
        return JSON[S(0x279)](d);
    }
}
class Item {
    [y(0x1f9)] = [];
    [y(0x310)] = '';
    [y(0x307)] = '';
    [y(0x275)] = '';
    [y(0x327)] = '';
    [y(0x29c)] = '';
    [y(0x205)] = '';
    [y(0x23b)] = '';
    [y(0x27e)] = '';
    [y(0x2bb)] = '';
    constructor(d) {
        const T = y,
            e = {
                'muPcO': function (f, g) {
                    return f + g;
                },
                'jFjWT': T(0x26c)
            };
        console[T(0x24d)](e[T(0x253)](e[T(0x27f)], d)), this[T(0x307)] = d;
    }
    static [y(0x215)](d) {
        const U = y,
            e = {
                'YWWQD': U(0x348),
                'AnDcx': 'undefined',
                'tnhcy': function (h, i) {
                    return h == i;
                },
                'reNyO': U(0x22e),
                'dBNBa': U(0x27c),
                'julUf': U(0x29c),
                'EblmY': function (h, i) {
                    return h == i;
                },
                'jcLSh': U(0x24b),
                'WPvTs': U(0x23b),
                'UjukU': U(0x27e),
                'PvFot': function (h, i) {
                    return h == i;
                },
                'egyYf': U(0x1f2),
                'OTAvw': 'items'
            };
        if (_[U(0x25d)](d)) return new Item();
        let f = JSON[U(0x2cd)](d),
            g = new Item();
        return g[U(0x310)] = typeof f[e['YWWQD']] == e[U(0x2ea)] ? '' : f[e[U(0x235)]], g['fileId'] = e[U(0x2a3)](typeof f[e[U(0x343)]], U(0x2cb)) ? '' : f[U(0x22e)], g[U(0x275)] = e[U(0x2a3)](typeof f[U(0x27c)], e['AnDcx']) ? '' : f[e[U(0x2eb)]], g[U(0x327)] = e['tnhcy'](typeof f[U(0x327)], U(0x2cb)) ? '' : f[U(0x327)], g['type'] = typeof f['type'] == e['AnDcx'] ? '' : f[e[U(0x2da)]], g[U(0x205)] = e['EblmY'](typeof f[e[U(0x34e)]], e[U(0x2ea)]) ? '' : f[e[U(0x34e)]], g['category'] = typeof f[e['WPvTs']] == 'undefined' ? '' : f[e[U(0x308)]], g[U(0x27e)] = e[U(0x281)](typeof f[e[U(0x2d1)]], U(0x2cb)) ? '' : f[e['UjukU']], g[U(0x2bb)] = e[U(0x2de)](typeof f[e['egyYf']], e[U(0x2ea)]) ? '' : f[e[U(0x26b)]], typeof f[U(0x1f9)] != e[U(0x2ea)] && Array['isArray'](f[U(0x1f9)]) && !_['isEmpty'](f['items']) && f[e[U(0x34d)]][U(0x210)](function (h) {
            const V = U;
            let i = Item[V(0x215)](JSON[V(0x279)](h));
            g[V(0x1f9)]['push'](i);
        }), g;
    } [y(0x325)]() {
        const W = y;
        return _['isEmpty'](this[W(0x1f9)]) ? [] : this[W(0x1f9)];
    } [y(0x221)]() {
        const X = y;
        return _[X(0x25d)](this['nextMarker']) ? '' : this['nextMarker'];
    } ['getFileId']() {
        const Y = y;
        return _['isEmpty'](this['fileId']) ? '' : this[Y(0x307)];
    } [y(0x2b8)]() {
        const Z = y;
        return _[Z(0x25d)](this[Z(0x327)]) ? '' : this[Z(0x327)];
    } ['getType']() {
        const a0 = y;
        return _[a0(0x25d)](this[a0(0x29c)]) ? '' : this[a0(0x29c)];
    } ['getExt']() {
        const a1 = y;
        return _['isEmpty'](this['fileExtension']) ? '' : this[a1(0x205)];
    } [y(0x335)]() {
        const a2 = y;
        return _[a2(0x25d)](this[a2(0x23b)]) ? '' : this[a2(0x23b)];
    } ['getSize']() {
        const a3 = y,
            d = {
                'WIJtp': function (e, f) {
                    return e == f;
                },
                'CTVsW': function (e, f) {
                    return e + f;
                },
                'xqapa': function (e, f) {
                    return e + f;
                }
            };
        return d[a3(0x31b)](this[a3(0x27e)], 0x0) ? '' : d[a3(0x351)](d[a3(0x320)]('[', c['getSize'](this[a3(0x27e)])), ']');
    } ['getParent']() {
        const a4 = y,
            d = {
                'MuVgL': function (e, f) {
                    return e + f;
                }
            };
        return _[a4(0x25d)](this[a4(0x2bb)]) ? '' : d[a4(0x2a9)]('[' + this[a4(0x2bb)], ']');
    } ['parentFunc'](d) {
        return this['parent'] = d, this;
    } [y(0x2e9)]() {
        const a5 = y,
            d = {
                'YGhdP': function (e, f) {
                    return e + f;
                }
            };
        return d['YGhdP'](d[a5(0x312)](this['getParent']() + '\x20', this[a5(0x2b8)]()), '\x20') + this[a5(0x225)]();
    }
}
class Code {
    [y(0x278)] = '';
    static [y(0x215)](d) {
        const a6 = y,
            e = {
                'FLZZh': a6(0x278)
            };
        if (_[a6(0x25d)](d)) return new Code();
        let f = JSON[a6(0x2cd)](d),
            g = new Code();
        return g['redirectUri'] = f[e['FLZZh']], g;
    }
    constructor() { } ['getRedirectUri']() {
        const a7 = y;
        return _['isEmpty'](this['redirectUri']) ? '' : this[a7(0x278)];
    } [y(0x20d)]() {
        const a8 = y,
            d = {
                'DTswQ': a8(0x32a)
            };
        return this['getRedirectUri']()[a8(0x338)](d[a8(0x2a1)])[0x1];
    }
}
const UA = y(0x204),
    CLIENT_ID = y(0x2d5);
let quality = {},
    tempIds = [],
    refreshToken = '',
    shareToken = '',
    shareId = '',
    oauth = new OAuth(),
    user = new User(),
    log = c[y(0x24d)];
async function getUserCache() {
    const a9 = y,
        d = {
            'JpwiC': a9(0x20b),
            'OcxGe': 'aliyundrive_user'
        };
    var e = await local[a9(0x250)](d[a9(0x314)], d['OcxGe']);
    return e;
}
async function getOAuthCache() {
    const aa = y,
        d = {
            'BYnXW': 'ali',
            'bIGZt': aa(0x201)
        };
    var e = await local[aa(0x250)](d['BYnXW'], d[aa(0x33e)]);
    return e;
}
async function initSome() {
    const ab = y,
        d = {
            'KELrN': function (g) {
                return g();
            },
            'ySAeR': function (g, h) {
                return g(h);
            },
            'LyJDL': function (g, h) {
                return g + h;
            },
            'sMxZd': ab(0x259),
            'SCZsR': ab(0x332),
            'XuWHB': function (g, h) {
                return g(h);
            },
            'gHbEP': function (g, h) {
                return g + h;
            },
            'gJFiF': 'initSome----user-',
            'plJlg': ab(0x25f),
            'RhMwx': ab(0x26e)
        };
    tempIds = [];
    let e = await d[ab(0x2be)](getOAuthCache);
    await d[ab(0x2b4)](log, d[ab(0x21e)](d[ab(0x2d4)], e)), oauth = OAuth['objectFrom'](e), console['log'](d[ab(0x2a0)]), console[ab(0x24d)](oauth);
    let f = await getUserCache();
    console[ab(0x24d)](f), await d[ab(0x1f6)](log, d[ab(0x2ed)](d[ab(0x287)], f)), user = User[ab(0x215)](f), quality = {
        '4K': d[ab(0x2fa)],
        '2k': d[ab(0x32f)],
        '超清': ab(0x23a),
        '高清': 'HD',
        '标清': 'SD',
        '流畅': 'LD'
    };
}

function setRefreshToken(d) {
    refreshToken = d;
}

function getToken() {
    const ac = y;
    return user[ac(0x232)]();
}
async function setShareId(d) {
    const ad = y,
        e = {
            'LKwAE': function (f, g) {
                return f == g;
            },
            'kKgvk': function (f, g) {
                return f == g;
            },
            'mjziL': function (f) {
                return f();
            },
            'muyXj': function (f) {
                return f();
            }
        };
    e['LKwAE'](getOAuthCache()[ad(0x32e)], 0x0) && await oauth[ad(0x333)]()[ad(0x257)](), e[ad(0x282)](e[ad(0x20e)](getUserCache)[ad(0x32e)], 0x0) && await user['clean']()['save'](), shareId = d, await e['muyXj'](refreshShareToken);
}

function getHeader() {
    const ae = y,
        d = {
            'nMWPN': ae(0x2bf),
            'VvOUA': ae(0x324),
            'Mqofq': ae(0x21f)
        };
    var e = {};
    return e[d[ae(0x2d6)]] = UA, e[d[ae(0x209)]] = d[ae(0x294)], e;
}

function getHeaderAuth() {
    const af = y,
        d = {
            'BRKuj': '1|3|2|0|4',
            'CILvi': af(0x329),
            'advFb': af(0x27b),
            'Iieob': af(0x251)
        },
        e = d[af(0x319)][af(0x338)]('|');
    let f = 0x0;
    while (!![]) {
        switch (e[f++]) {
            case '0':
                if (user[af(0x22f)]()) g[d[af(0x273)]] = user[af(0x202)]();
                continue;
            case '1':
                var g = {};
                continue;
            case '2':
                g[d[af(0x212)]] = af(0x20c);
                continue;
            case '3':
                g[d[af(0x25c)]] = shareToken;
                continue;
            case '4':
                return g;
        }
        break;
    }
}

function getHeaderOpen() {
    const ag = y,
        d = {
            'rKNKh': ag(0x329)
        },
        e = '3|2|0|1|4'[ag(0x338)]('|');
    let f = 0x0;
    while (!![]) {
        switch (e[f++]) {
            case '0':
                console['log'](oauth);
                continue;
            case '1':
                g[d[ag(0x2f2)]] = oauth[ag(0x202)]();
                continue;
            case '2':
                console[ag(0x24d)]('getHeaderOpen---');
                continue;
            case '3':
                var g = {};
                continue;
            case '4':
                return g;
        }
        break;
    }
}
async function alist(d, e) {
    const ah = y,
        f = {
            'ipqtG': function (j, k) {
                return j + k;
            },
            'IfVWI': function (j, k, l, m) {
                return j(k, l, m);
            },
            'cWzMw': function (j) {
                return j();
            },
            'KIjEh': ah(0x258)
        };
    let g = f[ah(0x227)](ah(0x330), d),
        h = await f[ah(0x2fd)](postJson, g, e, f[ah(0x2ec)](getHeader)),
        i = h[ah(0x2c3)];
    console[ah(0x24d)](f['KIjEh']), console['log'](i);
    if (await isManyRequest(i)) return ![];
    return oauth = await OAuth[ah(0x215)](i)[ah(0x257)](), !![];
}

function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - 0x1ef;
        let h = e[f];
        return h;
    }, b(c, d);
}
async function getString(d) {
    const ai = y,
        e = {
            'GisAr': function (g, h, i) {
                return g(h, i);
            }
        };
    let f = await e[ai(0x280)](req, d, {});
    return f[ai(0x2c3)];
}
async function postJson(d, e, f) {
    const aj = y,
        g = {
            'ekdbI': 'Content-Type',
            'jKXdN': aj(0x2bc),
            'SJkEl': aj(0x21a)
        };
    f[g[aj(0x230)]] = g[aj(0x337)];
    let h = await req(d, {
        'headers': f,
        'method': g[aj(0x2c1)],
        'data': e
    });
    return h;
}
async function post(d, e) {
    const ak = y,
        f = {
            'ncLfp': ak(0x277),
            'HHgnl': function (h, i) {
                return h + i;
            },
            'xBLyL': ak(0x2e2),
            'QQWXs': function (h, i, j, k) {
                return h(i, j, k);
            }
        };
    d = d[ak(0x21d)](f[ak(0x2ab)]) ? d : f[ak(0x345)](f[ak(0x31f)], d);
    let g = await f[ak(0x256)](postJson, d, e, getHeader());
    return g[ak(0x2c3)];
}
async function auth(d, e, f) {
    const al = y,
        g = {
            'pxFvk': al(0x277),
            'mMdtB': function (i, j) {
                return i + j;
            },
            'YrvVo': al(0x2e2),
            'eQRbb': function (i) {
                return i();
            },
            'jlgJn': function (i, j) {
                return i(j);
            },
            'nZpFP': function (i, j) {
                return i + j;
            },
            'zVijA': al(0x290),
            'BoSkN': function (i, j) {
                return i == j;
            },
            'mSzjm': function (i, j) {
                return i == j;
            },
            'vzWdO': function (i, j) {
                return i == j;
            },
            'hiLeM': al(0x2cb),
            'iESOf': function (i, j) {
                return i + j;
            },
            'MIEhJ': al(0x2b1),
            'pyxfj': function (i, j, k, l) {
                return i(j, k, l);
            },
            'bzvtL': function (i, j) {
                return i == j;
            }
        };
    d = d[al(0x21d)](g[al(0x29d)]) ? d : g[al(0x261)](g[al(0x30a)], d);
    let h = await postJson(d, e, g['eQRbb'](getHeaderAuth));
    await g['jlgJn'](log, g['nZpFP'](g[al(0x23f)], h[al(0x2c3)]));
    if (f && (g[al(0x284)](h[al(0x31e)], 0x190) || g[al(0x30b)](h[al(0x31e)], 0x191) || g['vzWdO'](typeof h['code'], g[al(0x2e6)]) || _[al(0x25d)](h[al(0x2c3)])) && await g['eQRbb'](refreshAccessToken)) return await g[al(0x2e8)](log, g[al(0x23c)](g[al(0x285)], h[al(0x2c3)])), await g[al(0x2c9)](auth, d, e, ![]);
    if (f && (g[al(0x305)](h[al(0x31e)], 0x1ad) || g[al(0x30b)](typeof h[al(0x31e)], g[al(0x2e6)]))) return await g[al(0x2e8)](log, al(0x1f1) + h[al(0x2c3)]), await auth(d, e, ![]);
    return h[al(0x2c3)];
}
async function oauthFunc(d, e, f) {
    const am = y,
        g = {
            'uBkSR': am(0x277),
            'WeLAI': function (i, j) {
                return i + j;
            },
            'hEalK': am(0x2e3),
            'QrCOx': function (i, j, k, l) {
                return i(j, k, l);
            },
            'rUxDN': function (i) {
                return i();
            },
            'RMOuy': function (i, j) {
                return i(j);
            },
            'ZqaxB': am(0x24c),
            'hAOAA': function (i, j) {
                return i == j;
            },
            'udyVK': am(0x344)
        };
    d = d[am(0x21d)](g[am(0x2b7)]) ? d : g['WeLAI'](g[am(0x315)], d);
    let h = await g[am(0x233)](postJson, d, e, g[am(0x26f)](getHeaderOpen));
    await g[am(0x25b)](log, g[am(0x33a)] + JSON[am(0x279)](h));
    if (f && (g[am(0x2fe)](h[am(0x31e)], 0x190) || h[am(0x31e)] == 0x191 || typeof h[am(0x31e)] == am(0x2cb) || _['isEmpty'](h[am(0x2c3)])) && await refreshOpenToken()) return await g[am(0x25b)](log, g['udyVK'] + h['content']), await g['QrCOx'](oauthFunc, d, e, ![]);
    return h[am(0x2c3)];
}
async function isManyRequest(d) {
    const an = y,
        e = {
            'HwKXy': an(0x346)
        };
    if (!(d[an(0x336)](e[an(0x33c)]) > -0x1)) return ![];
    return await oauth[an(0x333)]()[an(0x257)](), !![];
}
async function refreshShareToken() {
    const ao = y,
        d = {
            'yHNQc': ao(0x27c),
            'Gfete': ao(0x2d3),
            'xVCpe': function (f, g, h) {
                return f(g, h);
            },
            'khAEE': 'v2/share_link/get_share_token',
            'PHkFb': ao(0x263)
        };
    try {
        let f = {};
        f[d[ao(0x237)]] = shareId, f[d[ao(0x21c)]] = '';
        let g = await d['xVCpe'](post, d[ao(0x219)], f),
            h = JSON[ao(0x2cd)](g);
        shareToken = h[d['PHkFb']];
    } catch (i) {
        console[ao(0x24d)](i['message']);
    }
}
async function refreshAccessToken() {
    const ap = y,
        d = {
            'VSHRb': function (f, g) {
                return f(g);
            },
            'sbuzP': ap(0x1f4),
            'NCIrQ': ap(0x2ac),
            'vgwfD': function (f, g) {
                return f(g);
            },
            'RWkoQ': function (f, g) {
                return f + g;
            },
            'MRZCr': 'refreshAccessToken---body--',
            'Rsnnq': function (f, g, h) {
                return f(g, h);
            },
            'WkLaB': ap(0x238),
            'BnGvX': 'refreshAccessToken---result--',
            'EgULx': function (f, g) {
                return f(g);
            },
            'GhMHz': function (f, g) {
                return f + g;
            },
            'QnxIA': ap(0x28e),
            'Gadbk': function (f, g) {
                return f(g);
            },
            'fqxvA': ap(0x34b)
        };
    try {
        let f = {},
            g = user[ap(0x232)]();
        _[ap(0x25d)](g) && (g = refreshToken);
        g[ap(0x21d)](ap(0x222)) && (g = await d[ap(0x2f6)](getString, g), g = g[ap(0x214)]());
        f[d[ap(0x255)]] = g, f[d['NCIrQ']] = d[ap(0x255)], await d['vgwfD'](log, d['RWkoQ'](d[ap(0x23e)], JSON[ap(0x279)](f)));
        let h = await d[ap(0x331)](post, d['WkLaB'], f);
        await log(d[ap(0x28a)](d[ap(0x264)], h)), user = await User[ap(0x215)](h)[ap(0x257)](), await d[ap(0x2b2)](log, d[ap(0x303)](d['QnxIA'], user[ap(0x33b)]()));
        if (_[ap(0x25d)](user[ap(0x27d)]())) throw new Error(h);
        return !![];
    } catch (i) {
        return await d['Gadbk'](log, d[ap(0x2af)] + i[ap(0x2a5)]), console['log'](i[ap(0x2a5)]), await user[ap(0x333)]()['save'](), !![];
    }
}
async function oauthRequest() {
    const aq = y,
        d = {
            'zzTAE': aq(0x231),
            'tNoLP': function (f, g) {
                return f + g;
            },
            'JRMkp': aq(0x2d0),
            'VXhAS': aq(0x207),
            'jFhFf': function (f, g, h, i) {
                return f(g, h, i);
            },
            'DpqQD': function (f, g) {
                return f(g);
            },
            'xSimp': function (f, g) {
                return f + g;
            },
            'ZGvIL': aq(0x31d),
            'MKBwJ': function (f, g) {
                return f(g);
            }
        };
    try {
        let f = {};
        f[d[aq(0x32c)]] = 0x1, f[aq(0x2d9)] = 'user:base,file:all:read,file:all:write';
        let g = d['tNoLP'](d[aq(0x2f1)](d[aq(0x33d)], CLIENT_ID), d[aq(0x276)]),
            h = await d[aq(0x24e)](auth, g, f, !![]);
        return await d[aq(0x306)](log, d['xSimp'](d['ZGvIL'], h)), console[aq(0x24d)](d[aq(0x2e7)]), console[aq(0x24d)](h), await d[aq(0x29a)](oauthRedirect, Code[aq(0x215)](h)[aq(0x20d)]());
    } catch (i) {
        return console[aq(0x29b)](i), ![];
    }
}
async function oauthRedirect(d) {
    const ar = y,
        f = {
            'RXdLd': 'grant_type',
            'rVDRs': 'authorization_code',
            'XLtXk': function (g, h, i) {
                return g(h, i);
            },
            'cYZLf': ar(0x31e)
        };
    try {
        let g = {};
        return g['code'] = d, g[f[ar(0x326)]] = f[ar(0x1fd)], await f[ar(0x2cc)](alist, f[ar(0x2aa)], g);
    } catch (h) {
        return console[ar(0x24d)](h[ar(0x2a5)]), await oauth[ar(0x333)]()['save'](), ![];
    }
}

function a() {
    const aK = ['isEmpty', '3469644GzYcqg', 'UHD', 'copy---user-', 'mMdtB', 'idgqL', 'share_token', 'BnGvX', 'NHyWF', 'BrVbm', 'SmPeu', '43810OLOQrt', 'FdWOe', 'order_direction', 'egyYf', 'fileId---', 'wdOnA', 'QHD', 'rUxDN', 'VdDQX', 'YKYvF', 'unshift', 'CILvi', 'file_infos', 'shareId', 'VXhAS', 'https', 'redirectUri', 'stringify', 'EQTvw', 'X-Canary', 'share_id', 'getAccessToken', 'size', 'jFjWT', 'GisAr', 'EblmY', 'kKgvk', 'wQIwE', 'BoSkN', 'MIEhJ', 'limit', 'gJFiF', '7131804tvtQBB', 'mkUgB', 'RWkoQ', 'accessToken', 'removeExt', 'getExt', 'refreshAccessToken---', 'BpZHw', 'auth--res--', 'refreshToken', 'openFile/getVideoPreviewPlayInfo', 'hasOwnProperty', 'Mqofq', 'FZpdd', 'AHWOY', 'fadkV', 'body', 'RHDSh', 'MKBwJ', 'error', 'type', 'pxFvk', 'aCTlR', 'RSPFq', 'SCZsR', 'DTswQ', 'OAuthobjectFrom-----\x20', 'tnhcy', 'Bxrif', 'message', 'yyLjc', 'drive_id', 'IFSWJ', 'MuVgL', 'cYZLf', 'ncLfp', 'grant_type', 'KYglo', 'sMnPj', 'fqxvA', 'video', 'auth--res--400', 'EgULx', 'user_id', 'ySAeR', 'tokenType', 'xYyxS', 'uBkSR', 'getName', 'audio', '1709LDZhKF', 'parent', 'application/json', 'adrive/v3/file/list', 'KELrN', 'User-Agent', '195iJMPXj', 'SJkEl', 'setRefreshToken', 'content', 'oVQui', 'hBxyM', 'uxjpN', 'getFileId', 'KqjOy', 'pyxfj', 'CNCCd', 'undefined', 'XLtXk', 'parse', 'XzMkF', 'video_preview_play_info', 'https://open.aliyundrive.com/oauth/users/authorize?client_id=', 'UjukU', '$$$', 'share_pwd', 'sMxZd', '76917ccccd4441c39457a04f6084fb2f', 'nMWPN', 'eZVAE', 'ZfttW', 'scope', 'julUf', 'live_transcoding', 'url_expire_sec', 'STftp', 'PvFot', 'cdSWt', 'fENPx', 'aXHJZ', 'https://api.aliyundrive.com/', 'https://open.aliyundrive.com/adrive/v1.0/', 'lXMfR', '668TtGUFT', 'hiLeM', 'ZGvIL', 'jlgJn', 'getDisplayName', 'AnDcx', 'dBNBa', 'cWzMw', 'gHbEP', 'hfMvJ', 'jQEMF', 'getType', 'tNoLP', 'rKNKh', 'WTNwF', 'uUrFz', 'PJVOQ', 'VSHRb', 'LZIlv', 'toString', '阿里云盘', 'plJlg', 'push', 'bNhAN', 'IfVWI', 'hAOAA', 'iLyDO', 'EXzNC', 'file', 'wXaWK', 'GhMHz', '93zuGnIU', 'bzvtL', 'DpqQD', 'fileId', 'WPvTs', 'access_token', 'YrvVo', 'mSzjm', 'dhUkc', 'IBsxH', 'copy----', 'KLrmp', 'nextMarker', 'VsAzB', 'YGhdP', '64748uavDCD', 'JpwiC', 'hEalK', 'getUserId', 'BBiWQ', 'mTeAg', 'BRKuj', 'join', 'WIJtp', 'eAfvF', 'oauthRequest---', 'code', 'xBLyL', 'xqapa', 'LKCUZ', 'adrive/v2/batch', 'atWct', 'Referer', 'getItems', 'RXdLd', 'name', 'driveId', 'authorization', 'code=', 'proxy://sub/', 'zzTAE', 'lXhAy', 'length', 'RhMwx', 'https://api-cf.nn.ci/alist/ali_open/', 'Rsnnq', 'initSome----', 'clean', 'oDviT', 'getCategory', 'indexOf', 'jKXdN', 'split', '8fZcTry', 'ZqaxB', 'getDriveId', 'HwKXy', 'JRMkp', 'bIGZt', 'xDLZN', 'KHlnL', 'ASC', 'JdLhq', 'reNyO', 'oauthFunc--res-2-', 'HHgnl', 'Too\x20Many\x20Requests', 'getTokenType', 'next_marker', 'token', 'LEOIe', 'refreshAccessToken---error-', 'default_drive_id', 'OTAvw', 'jcLSh', 'marker', 'getDownloadUrl---', 'CTVsW', '1067rySqiK', 'ForbiddenNoPermission.File', 'auth--res--429', 'parent_file_id', 'urGys', 'refresh_token', 'parentFunc', 'XuWHB', 'ilunC', 'QwjbN', 'items', 'wKdQu', '{\x22requests\x22:[{\x22body\x22:{\x22file_id\x22:\x22{{data.fileId}}\x22,\x22share_id\x22:\x22{{data.shareId}}\x22,\x22auto_rename\x22:true,\x22to_parent_file_id\x22:\x22root\x22,\x22to_drive_id\x22:\x22{{data.driveId}}\x22},\x22headers\x22:{\x22Content-Type\x22:\x22application/json\x22},\x22id\x22:\x220\x22,\x22method\x22:\x22POST\x22,\x22url\x22:\x22/file/copy\x22}],\x22resource\x22:\x22file\x22}', 'live_transcoding_subtitle_task_list', 'rVDRs', 'UvHZQ', 'copy---', 'set', 'aliyundrive_oauth', 'getAuthorization', 'IeohA', 'Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2013_2_3\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Version/13.0.3\x20Mobile/15E148\x20Safari/604.1', 'fileExtension', 'innlI', '&redirect_uri=https://alist.nn.ci/tool/aliyundrive/callback&scope=user:base,file:all:read,file:all:write&state=', 'ZITdS', 'VvOUA', 'aliyundrive_user', 'ali', 'client=Android,app=adrive,version=v4.3.1', 'getCode', 'mjziL', 'token_type', 'forEach', 'ptAgN', 'advFb', '158418PJRwWy', 'trim', 'objectFrom', 'nMbKb', 'HEuur', 'rlZMZ', 'khAEE', 'post', 'userId', 'Gfete', 'startsWith', 'LyJDL', 'https://www.aliyundrive.com/', 'live_transcoding_task_list', 'getNextMarker', 'http', 'order_by', 'deleteFile-----', 'getSize', 'IizMu', 'ipqtG', 'oGzgI', '{\x22requests\x22:[{\x22body\x22:{\x22drive_id\x22:\x22{{data.driveId}}\x22,\x22file_id\x22:\x22{{data.fileId}}\x22},\x22headers\x22:{\x22Content-Type\x22:\x22application/json\x22},\x22id\x22:\x22{{data.fileId}}\x22,\x22method\x22:\x22POST\x22,\x22url\x22:\x22/file/delete\x22}],\x22resource\x22:\x22file\x22}', 'fwnAU', 'aGHGZ', 'wKFKk', 'QIieu', 'file_id', 'isAuthed', 'ekdbI', 'authorize', 'getRefreshToken', 'QrCOx', 'folder', 'YWWQD', 'toLowerCase', 'yHNQc', 'https://auth.aliyundrive.com/v2/account/token', 'lUfjx', 'FHD', 'category', 'iESOf', 'TJJZM', 'MRZCr', 'zVijA', 'BXqTQ', 'responses', 'nypMy', 'RRzZm', 'VHdaI', 'QRqNe', '@@@', 'url', '390145GWIXVC', 'geopG', 'template_id', 'file_extension', 'oauthFunc--res-1-', 'log', 'jFhFf', 'HBirW', 'get', 'x-share-token', 'kSmzw', 'muPcO', 'YpxiS', 'sbuzP', 'QQWXs', 'save', 'alist---', 'initSome----oauth-', 'root', 'RMOuy', 'Iieob'];
    a = function () {
        return aK;
    };
    return a();
}
async function refreshOpenToken() {
    const as = y,
        d = {
            'fwnAU': function (f) {
                return f();
            },
            'TJJZM': as(0x2ac),
            'nMbKb': as(0x1f4),
            'paYzo': as(0x349)
        };
    try {
        if (_[as(0x25d)](oauth['getRefreshToken']())) return await d[as(0x22a)](oauthRequest);
        let f = {};
        return f[d[as(0x23d)]] = d['nMbKb'], f[d[as(0x216)]] = oauth[as(0x232)](), await alist(d['paYzo'], f);
    } catch (g) {
        return console[as(0x24d)](g[as(0x2a5)]), oauth[as(0x333)]()[as(0x257)](), ![];
    }
}
async function getVod(d, e) {
    const at = y,
    const prefix = "关注【码上放生】公众号: "
    f = {
        'iLyDO': 'share_id',
        'uxjpN': function (u, v, w) {
            return u(v, w);
        },
        'eZVAE': function (u, v) {
            return u + v;
        },
        'aCTlR': function (u, v, w) {
            return u(v, w);
        },
        'rlZMZ': function (u, v) {
            return u < v;
        },
        'FdWOe': 'share_name',
        'oDviT': at(0x2d2),
        'VsAzB': at(0x2f9)
    };
    let g = {};
    g[f[at(0x2ff)]] = shareId;
    let h = await f['uxjpN'](post, 'adrive/v3/share_link/get_share_by_anonymous', g),
        j = JSON[at(0x2cd)](h),
        k = [],
        l = [],
        m = f[at(0x2c6)](getParentFileId, e, j),
        n = new Item(m);
    await listFiles(n, k, l);
    let o = ['原画', '超清', '高清'],
        p = [],
        q = [];
    for (var r of k) p[at(0x2fb)](f[at(0x2d7)](f['eZVAE'](r[at(0x2e9)](), '$') + r[at(0x2c7)](), f[at(0x29e)](findSubs, r['getName'](), l)));
    for (var s = 0x0; f[at(0x218)](s, o['length']); s++) q[at(0x2fb)](p['join']('#'));
    let t = {
        'vod_id': d,
        'vod_content': prefix + d,
        'vod_pic': j['avatar'],
        'vod_name': j[f[at(0x269)]],
        'vod_play_url': q[at(0x31a)](at(0x2d2)),
        'vod_play_from': o[at(0x31a)](f[at(0x334)]),
        'type_name': f[at(0x311)],
        'vod_year': '',
        'vod_area': '',
        'vod_remarks': '',
        'vod_actor': '',
        'vod_director': ''
    };
    return t;
}
async function listFiles(d, e, f) {
    const au = y,
        g = {
            'mTeAg': function (h, i, j, k, l) {
                return h(i, j, k, l);
            }
        };
    return await g[au(0x318)](listFilesMarker, d, e, f, '');
}
async function listFilesMarker(d, e, f, g) {
    const av = y,
        h = {
            'fDBZj': av(0x286),
            'YpxiS': av(0x27c),
            'LEOIe': av(0x223),
            'lXhAy': 'name',
            'HEuur': av(0x341),
            'RzbYq': function (n, o) {
                return n > o;
            },
            'STftp': av(0x34f),
            'WTNwF': function (n, o, p, q) {
                return n(o, p, q);
            },
            'IFSWJ': av(0x2bd),
            'wKFKk': function (n, o) {
                return n == o;
            },
            'IBsxH': 'folder',
            'QIieu': 'video',
            'hBxyM': function (n, o) {
                return n == o;
            },
            'IizMu': av(0x2b9),
            'ptAgN': function (n, o) {
                return n > o;
            },
            'etOiS': function (n, o, p, q, r) {
                return n(o, p, q, r);
            },
            'AHWOY': function (n, o, p, q) {
                return n(o, p, q);
            }
        };
    let i = {},
        j = [];
    i[h['fDBZj']] = 0xc8, i[h[av(0x254)]] = shareId, i[av(0x1f2)] = d[av(0x2c7)](), i[h[av(0x34a)]] = h[av(0x32d)], i[av(0x26a)] = h[av(0x217)];
    if (h['RzbYq'](g[av(0x32e)], 0x0)) i[h[av(0x2dd)]] = g;
    let k = Item[av(0x215)](await h[av(0x2f3)](auth, h[av(0x2a8)], i, !![]));
    for (var l of k[av(0x325)]()) {
        if (h['wKFKk'](l[av(0x2f0)](), h[av(0x30d)])) j[av(0x2fb)](l);
        else {
            if (h[av(0x22c)](l[av(0x335)](), h[av(0x22d)]) || h[av(0x2c5)](l[av(0x335)](), h[av(0x226)])) e[av(0x2fb)](l[av(0x1f5)](d[av(0x2b8)]()));
            else c['isSub'](l[av(0x28d)]()) && f['push'](l);
        }
    }
    h[av(0x211)](k['getNextMarker']()[av(0x32e)], 0x0) && await h['etOiS'](listFilesMarker, d, e, f, k[av(0x221)]());
    for (var m of j) {
        await h[av(0x296)](listFiles, m, e, f);
    }
}

function getParentFileId(d, e) {
    const aw = y,
        f = {
            'ykRLt': aw(0x274),
            'KHlnL': function (i, j) {
                return i == j;
            },
            'wKdQu': function (i, j) {
                return i == j;
            },
            'EXzNC': 'type',
            'kaHOj': aw(0x234),
            'atWct': 'file_id',
            'ZfttW': aw(0x23b),
            'cdSWt': aw(0x2b0),
            'VcUup': aw(0x25a)
        };
    let g = e[f['ykRLt']];
    if (!_[aw(0x25d)](d)) return d;
    if (f[aw(0x340)](g['length'], 0x0)) return '';
    let h = g[0x0];
    if (f[aw(0x1fa)](h[f[aw(0x300)]], f['kaHOj'])) return h[f[aw(0x323)]];
    if (f[aw(0x1fa)](h[f[aw(0x300)]], aw(0x301)) && f[aw(0x1fa)](h[f[aw(0x2d8)]], f[aw(0x2df)])) return f['VcUup'];
    return '';
}

function pair(d, e, f) {
    const ax = y,
        g = {
            'YKYvF': function (j, k) {
                return j > k;
            }
        };
    for (var h of e) {
        var i = c[ax(0x28c)](h[ax(0x2b8)]())[ax(0x236)]();
        if (d['indexOf'](i) > -0x1 || g[ax(0x271)](i[ax(0x336)](d), -0x1)) f[ax(0x2fb)](h);
    }
}

function findSubs(d, e) {
    const ay = y,
        f = {
            'VdDQX': function (k, l, m, n) {
                return k(l, m, n);
            },
            'rzQnO': function (k, l) {
                return k == l;
            },
            'hfMvJ': function (k, l) {
                return k + l;
            },
            'kSmzw': function (k, l) {
                return k + l;
            },
            'yyLjc': ay(0x246)
        };
    let g = [];
    f[ay(0x270)](pair, c[ay(0x28c)](d)[ay(0x236)](), e, g);
    if (f['rzQnO'](g[ay(0x32e)], 0x0))
        for (var h of e) {
            g[ay(0x2fb)](h);
        }
    let i = '';
    for (var j of g) {
        i += f[ay(0x2ee)](f[ay(0x2ee)](f[ay(0x2ee)](f[ay(0x2ee)](f[ay(0x252)]('+', c[ay(0x28c)](j[ay(0x2b8)]())), ay(0x246)), j[ay(0x28d)]()), f[ay(0x2a6)]), j['getFileId']());
    }
    return i;
}
async function getSubs(d) {
    const az = y,
        e = {
            'moymn': function (h, i) {
                return h + i;
            }
        };
    let f = [];
    for (var g of d) {
        if (!(g['indexOf'](az(0x246)) > -0x1)) continue;
        let h = g['split'](az(0x246)),
            i = h[0x0],
            j = h[0x1],
            k = e['moymn'](az(0x32b), h[0x2]);
        f[az(0x2fb)](k);
    }
    return f;
}
async function getDownloadUrl(d) {
    const aA = y,
        e = {
            'nypMy': function (h, i) {
                return h(i);
            },
            'NiXbt': aA(0x2a7),
            'Bxrif': function (h, i, j, k) {
                return h(i, j, k);
            },
            'IeohA': 'openFile/getDownloadUrl',
            'fadkV': aA(0x350),
            'QfNxY': function (h, i) {
                return h(i);
            }
        };
    tempIds['unshift'](await e[aA(0x242)](copy, d));
    let f = {};
    f[aA(0x22e)] = tempIds[0x0], f[e['NiXbt']] = user[aA(0x33b)]();
    let g = await e[aA(0x2a4)](oauthFunc, e[aA(0x203)], f, !![]);
    return console[aA(0x24d)](e['fadkV']), console[aA(0x24d)](g), await e['QfNxY'](log, e[aA(0x297)] + g), await deleteAll(), JSON['parse'](g)[aA(0x247)];
}
async function getVideoPreviewPlayInfo(d) {
    const aB = y,
        e = {
            'wdOnA': function (h, i) {
                return h(i);
            },
            'VHdaI': aB(0x22e),
            'RHDSh': aB(0x2a7),
            'mxBQB': 'category',
            'FqIsl': aB(0x2dc),
            'wQIwE': '14400',
            'XFWdu': function (h, i, j, k) {
                return h(i, j, k);
            },
            'BelTx': aB(0x292),
            'oVQui': 'getVideoPreviewPlayInfo===',
            'xVFEZ': function (h) {
                return h();
            }
        };
    tempIds[aB(0x272)](await e[aB(0x26d)](copy, d));
    let f = {};
    f[e[aB(0x244)]] = tempIds[0x0], f[e[aB(0x299)]] = user[aB(0x33b)](), f[e['mxBQB']] = aB(0x2db), f[e['FqIsl']] = e[aB(0x283)];
    let g = await e['XFWdu'](oauthFunc, e['BelTx'], f, !![]);
    return console['log'](e[aB(0x2c4)]), console[aB(0x24d)](g), await e['xVFEZ'](deleteAll), JSON[aB(0x2cd)](g)[aB(0x2cf)];
}
async function playerContent(d) {
    const aC = y,
        e = {
            'BpZHw': function (h, i) {
                return h(i);
            },
            'xYyxS': function (h, i) {
                return h(i);
            }
        };
    let f = await e[aC(0x28f)](getDownloadUrl, d[0x0]),
        g = await e[aC(0x2b6)](getSubs, d);
    return JSON[aC(0x279)]({
        'parse': 0x0,
        'url': f,
        'header': getHeader(),
        'subt': g
    });
}
async function playerContentByFlag(d, e) {
    const aD = y,
        f = {
            'RSPFq': function (l, m, n) {
                return l(m, n);
            },
            'HBirW': function (l, m) {
                return l(m);
            },
            'bNhAN': function (l) {
                return l();
            }
        };
    let g = await getVideoPreviewPlayInfo(d[0x0]),
        h = f[aD(0x29f)](getPreviewUrl, g, e),
        i = await f[aD(0x24f)](getSubs, d),
        j = f[aD(0x24f)](getSubsByPlayInfo, g);
    for (var k of j) {
        i[aD(0x2fb)](k);
    }
    return JSON[aD(0x279)]({
        'parse': 0x0,
        'url': h,
        'header': f[aD(0x2fc)](getHeader),
        'subt': i
    });
}

function getPreviewUrl(d, e) {
    const aE = y,
        f = {
            'lXMfR': aE(0x220),
            'ilunC': function (j, k) {
                return j < k;
            },
            'SmPeu': function (j, k) {
                return j == k;
            },
            'Djeny': aE(0x24a),
            'PJVOQ': aE(0x247)
        };
    if (!d[aE(0x293)]('live_transcoding_task_list')) return '';
    let g = d[f[aE(0x2e4)]];
    for (var h = 0x0; f[aE(0x1f7)](h, g[aE(0x32e)]); ++h) {
        let j = g[h];
        if (f[aE(0x267)](j[f['Djeny']], quality[e])) return j[f[aE(0x2f5)]];
    }
    return g[0x0][f[aE(0x2f5)]];
}

function getSubsByPlayInfo(d) {
    const aF = y,
        e = {
            'KYglo': aF(0x1fc),
            'XzMkF': 'language'
        };
    if (!d[aF(0x293)](e['KYglo'])) return [];
    let f = d[e[aF(0x2ad)]],
        g = [];
    for (var h = 0x0; h < f[aF(0x32e)]; ++h) {
        let j = f[h],
            k = j[e[aF(0x2ce)]],
            l = j['url'];
        g[aF(0x2fb)](l);
    }
    return g;
}
async function copy(d) {
    const aG = y,
        e = {
            'dhUkc': function (i, j) {
                return i + j;
            },
            'innlI': aG(0x260),
            'BrVbm': aG(0x1fb),
            'fENPx': function (i, j, k) {
                return i(j, k);
            },
            'QRqNe': function (i, j) {
                return i(j);
            },
            'CNCCd': function (i, j) {
                return i + j;
            },
            'lSakw': aG(0x1ff),
            'urGys': 'copy----json---',
            'RRzZm': function (i, j, k, l) {
                return i(j, k, l);
            },
            'eAfvF': aG(0x322),
            'LKCUZ': function (i, j) {
                return i + j;
            },
            'NHyWF': 'copy---result',
            'idgqL': aG(0x30e),
            'aGHGZ': function (i, j) {
                return i > j;
            },
            'LZIlv': aG(0x241),
            'lUfjx': aG(0x298),
            'wXaWK': aG(0x22e)
        };
    await log(e[aG(0x30c)](e[aG(0x206)], user[aG(0x2f8)]()));
    let f = e[aG(0x266)],
        g = {
            'fileId': d,
            'shareId': shareId,
            'driveId': user[aG(0x33b)]()
        };
    f = e[aG(0x2e0)](jinja2, f, {
        'data': g
    }), await e[aG(0x245)](log, e[aG(0x2ca)](e['lSakw'], f)), console[aG(0x24d)](e[aG(0x1f3)]), console[aG(0x24d)](f);
    let h = await e[aG(0x243)](auth, e[aG(0x31c)], JSON['parse'](f), !![]);
    await e['QRqNe'](log, e[aG(0x321)](e[aG(0x265)], h)), console['log'](e[aG(0x262)]), console[aG(0x24d)](h), console[aG(0x24d)](typeof h);
    if (e[aG(0x22b)](h[aG(0x336)](aG(0x1f0)), -0x1)) return e[aG(0x245)](copy, d);
    return JSON['parse'](h)[e[aG(0x2f7)]][0x0][e[aG(0x239)]][e[aG(0x302)]];
}
async function deleteAll() {
    const aH = y,
        d = {
            'BBiWQ': 'deleteAll-----',
            'QwjbN': function (g, h) {
                return g(h);
            }
        };
    let e = tempIds;
    console['log'](d[aH(0x317)]), console[aH(0x24d)](e);
    for (var f of e) {
        let g = await d[aH(0x1f8)](deleteFile, f);
        if (g) tempIds = e['filter'](h => h !== f);
    }
}
async function deleteFile(d) {
    const aI = y,
        e = {
            'BXqTQ': aI(0x229),
            'JdLhq': function (i, j, k) {
                return i(j, k);
            },
            'xDLZN': function (i, j, k, l) {
                return i(j, k, l);
            },
            'FZpdd': aI(0x224),
            'jQEMF': function (i, j) {
                return i == j;
            }
        };
    let f = e[aI(0x240)],
        g = {
            'fileId': d,
            'driveId': user[aI(0x33b)]()
        };
    f = e[aI(0x342)](jinja2, f, {
        'data': g
    });
    let h = await e[aI(0x33f)](auth, 'adrive/v2/batch', JSON[aI(0x2cd)](f), !![]);
    return console['log'](e[aI(0x295)]), console['log'](h), e[aI(0x2ef)](h[aI(0x32e)], 0xd3);
}
async function setToken(d) {
    const aJ = y,
        e = {
            'oGzgI': function (f) {
                return f();
            }
        };
    user[aJ(0x2c2)](d), await e[aJ(0x228)](refreshAccessToken);
}
export {
    initSome,
    setToken,
    setShareId,
    getVod,
    playerContent,
    playerContentByFlag
};