
        $(document).ready(function () {
            $("#flip").click(function () {
                $("#panel").slideToggle("slow");
            });
        });

        function calculate() {

            let euro, canada, hongkong, japan, mexico, amountIn, place, exchange;

            amountIn = document.getElementById("amountIn").value;

            place = parseFloat(amountIn);
            
            euro = 0.84 * place;
            canada = 1.23 * place;
            hongkong = 7.76 * place;
            japan = 110.80 * place;
            mexico = 19.82 * place;

            
            document.getElementById("euro").textContent = euro.toFixed(2);
            document.getElementById("canada").textContent = canada.toFixed(2);
            document.getElementById("hongkong").textContent = hongkong.toFixed(2);
            document.getElementById("japan").textContent = japan.toFixed(2);
            document.getElementById("mexico").textContent = mexico.toFixed(2);
        }

