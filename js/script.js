function submitToAPI(e) {
    e.preventDefault();
    //設定したAPI GatewayのエンドポイントURLをここに入れます。
    var URL = "https://m96fs6t0d5.execute-api.ap-northeast-1.amazonaws.com/sentmail";


    var iname = $("#name-input").val();
    var iemail = $("#email-input").val();
    var idesc = $("#description-input").val();

    //フォームの入力値をチェック
    var name = /[A-Za-z]{1}[A-Za-z]/;
    if (iname == null || iname == undefined || iname == '') { 
        alert("2文字以上記入してください。");
        return;
    }
    
    if (iemail.split(" ") === "") {
        alert("メールを入力してください。");
        return;
    }

    var email = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
    if (!email.test(iemail)) {
        alert("メールアドレスは正しくありません。");
        return;
    }
   
    var data = {
        name: iname,
        email: iemail,
        desc: idesc
    };

    $.ajax({
        type: "POST",
        //設定したAPI GatewayのエンドポイントURLをここに入れます。
        url: URL,
        dataType: "json",
        crossDomain: "true",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(data),

        success: function() {
            // フォームをクリアし、送信成功のメッセージを表示する
            alert("メッセージが送信されました！");
            document.getElementById("contact-form").reset();
            location.reload();
        },
        error: function() {
            // 送信エラーのメッセージを表示する
            alert("メッセージ送信失敗！");
        }
    });
}
