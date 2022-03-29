<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

    <style>
        * {
            box-sizing: border-box;
            margin: 0px;
            padding: 0px;
        }
        .content-my{
            width: 100%;
            max-width: 500px;
            display: block;
            margin: 0px auto;
            
        }
        .purple{
            background-color: #9822FF;
            padding: 40px 0px;
            margin: 40px 0px;
        }
        .logo, .product{
            display: block;
            margin: 0px auto;
        }
        .product{
            max-width: 350px;
            max-height: 350px;
        }
        .header{
            margin-top: unset !important;
        }
        .btn{
            width: 300px;
            padding: 15px 0px;
            color: white;
            font-weight: 600;
            border-radius: 30px;
            border: none;
            margin-top: 20px;
            margin-bottom: 20px;
            background-color: #20BA3A;
        }
        .t-white{
            color: white !important;
        }
        .footer-my{
            background-color: #EEEEEE;
            padding: 40px 20px
        }
        .btn-product{
            width: 180px;
            height: 60px;
            background: white;
            padding: 15px;
            border: none;
            margin-top: 15px;

            box-shadow: 0px 1px 5px #ccc;
            border-radius: 8px;

        }
        .btn-product img{
            width: 100%;
            height: 100%;
            border-radius:8px;
            object-fit: contain

        }

    </style>
</head>
<body>
    <section class='purple header'>
        <img class="logo" src="{{asset('assets/logo-big.png')}}" class="logo" alt="Laravel Logo">
    </section>
    <section>
        <article class="content-my">
            <br />
            <h4>Olá,</h4>
            <h4>Fique ligado! </h4>
            <br />
            <b>Dia 26 é a Black Friday nos EUA</b>, por isso aproveite para carregar a sua CambioWallet e aproveitar essas ofertas!
            <div>
                <button class="btn">Carregar CambioWallet</button>

            </div>
        </article>
    </section>
    <section class="purple">
        <article class="content-my">
            <table class="content" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                    
                    <td>
                        <br />
                        <h1 class='t-white'><b>até 50% OFF</b></h1>
                        <h3 class='t-white'>em Airpods</h3>
                        <h3 class='t-white'>e Relógio Invicta</h3>
                        <br />
                        <p class='t-white'>
                            <b >Dia 26 é a Black Friday nos EUA</b>, por isso aproveite para carregar a sua CambioWallet e aproveitar essas ofertas!
                        </p>
                        <div>
                            <button class="btn-product">
                                <img class="product" src="{{asset('assets/amazon.png')}}" class="logo" alt="Laravel Logo">
                            </button>
                        </div>
                    </td>
                    <td width="100%" cellpadding="0" cellspacing="0">
                        <img class="product" src="{{asset('assets/relogio.png')}}" class="logo" alt="Laravel Logo">
                    <td>
                </td>
            </table>
            
        </article>
    </section>
    <section >
        <article class="content-my">
            <table class="content" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                    <td width="100%" cellpadding="0" cellspacing="0">
                        <img class="product" src="{{asset('assets/notebookoteher.png')}}" class="logo" alt="Laravel Logo">
                    <td>
                    <td>
                        <h1><b>Promoção</b></h1>
                        <h3><b>em iPafs, Laptops, FitBit e mais</b></h3>
                
                        <div>
                            
                            <button class="btn-product">
                                <img class="product" src="{{asset('assets/bestbuy.png')}}" class="logo" alt="Laravel Logo">

                            </button>
                        </div>
                    </td>
                </td>
            </table>
            
        </article>
    </section>
    <section class="purple">
        <article class="content-my">
            <table class="content" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                    
                    <td>
                        <h1 class="t-white"><b>Promoção</b></h1>
                        <h3 class="t-white"><b>em iPafs, Laptops, FitBit e mais</b></h3>
                
                        <div>
                            <button class="btn-product">
                                <img class="product" src="{{asset('assets/walmart.png')}}" class="logo" alt="Laravel Logo">

                            </button>
                        </div>
                    </td>
                   
                    <td width="100%" cellpadding="0" cellspacing="0">
                        <img class="product" src="{{asset('assets/robos.png')}}" class="logo" alt="Laravel Logo">
                    <td>
                        
                </td>
            </table>
            
        </article>
    </section>
    <section>
        <article class="content-my">
            <br />
            <p>Seja rápido! Se quiser chegar a tempo dessas promoção então deve fazer a sua recarga agora mesmo por TED ou PIX.</p>

            <div>
                <button class="btn">Carregar CambioWallet</button>

            </div>
            <p> E se tiver dúvidas sobre como usar seu cartão é só avisar respondendo esse e-mail.</p>
            <br />
            <br />

            <h4>Até a próxima!</h4>
            <h4><b>Equipe CambioReal</b></h4>
            <br />
            
        </article>
    </section>
    <section class="footer-my">
        <article class="content-my">
            <p>CambioReal </p>
            <p>
                Esta mensagem, incluindo seus anexos, tem caráter confidencial e seu conteúdo é restrito aos destinatários, não podendo ser utilizado para outro fim. Caso você tenha recebido esta mensagem por engano, queira por favor retorná-la e apagá-la de seus arquivos. Qualquer uso não autorizado, replicação ou disseminação desta mensagem ou parte dela é expressamente proibido, e passível das medidas judiciais cabíveis, tanto em esfera cível como criminal.
            </p>
            
        </article>
    </section>
</body>
</html>
    
