//获取url参数
function getUrlKey(name){
    return decodeURIComponent((new RegExp('[?|&]'+name+'='+'([^&;]+?)(&|#|;|$)').exec(location.href)||[,""])[1].replace(/\+/g,'%20'))||null;
}

//返回上一页
function goBack() {
  window.history.back()
}
const HOST = 'http://law.8xcms.com'
const URL = `${HOST}/act.php`

/**
 *
 * @param method
 * @param url
 * @param data
 * @param complete
 */
function ourNetwork({method,url,data,complete}) {
  $.ajax({
    type: method,
    url: HOST+url,
    data: data,
    complete: complete
  })
}

/**
 * 第三方接口通用方法
 * @param params
 * @param path
 * @param method
 * @param head
 * @param complete
 */
function network({params,path,method,head,complete}) {
    $.ajax({
        type:"post",
        url: URL,
        data: {
            param: params,
            url: `https://ec2-18-209-228-104.compute-1.amazonaws.com:8443/v1/${path}`,
            type: method,
            header: head,
        },
        ContentType: "Application/JSON",
        complete: complete
    })
}
