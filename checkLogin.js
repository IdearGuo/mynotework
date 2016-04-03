/**
 * Created by rothsdad on 16/4/1.
 */

// 未登录
function noLogin(req, res, next) {
    if (!req.session.user) {
        console.log('抱歉,您还没有登录!');
        return res.redirect('/login'); //返回登录页面
    }
    next();
}

exports.noLogin = noLogin;