const HOST = 'http://law.8xcms.com/act.php'

/**
 * 调接口通用方法
 * @param params
 * @param path
 * @param method
 * @param head
 * @param success
 */
function network({params,path,method,head,success}) {
    $.ajax({
        type:"post",
        url: HOST,
        data: {
            param: params,
            url: `https://ec2-18-209-228-104.compute-1.amazonaws.com:8443/v1/${path}`,
            type: method,
            header: head,
        },
        ContentType: "Application/JSON",
        success: success
    })
}
