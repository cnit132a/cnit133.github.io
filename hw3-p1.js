

      function process() {

         var gpa, hw, mid, fe, par, gpaP, hwP, midP, feP, parP, final_avg;

         var errMsg1 = "<span style='font-weight: bold; color: red; font-size: 18px;'>Please all boxes must have numbers between 0 and 100</span>";




         hw = document.getElementById("hwavg").value;
         mid = document.getElementById("midter").value;
         fe = document.getElementById("fexam").value;
         par = document.getElementById("parti").value;


         if (isNaN(hw) || isNaN(fe) || isNaN(mid) || isNaN(par) || hw == "" || fe == "" || mid == "" || par == "" || hw > 100 || hw < 0 || fe < 0 || fe > 100 || mid < 0 || mid > 100 || par < 0 || par > 100) {
            document.getElementById("errOut").innerHTML = errMsg1;
         }

         else {
            

            hwP = parseInt(hw);
            midP = parseInt(mid);
            feP = parseInt(fe);
            parP = parseInt(par);

            
            final_avg = (.5 * hwP) + (.2 * feP) + (.2 * midP) + (.1 * parP);

            
            switch (true) {

               case (final_avg >= 90):
                  document.getElementById("results").innerHTML = ("The final average is " + Math.round(final_avg) + "<br><hr>Your letter grade is A<br><hr> Excellent work!<br><hr>")
                  break;

               case (final_avg >= 80):
                  document.getElementById("results").innerHTML = ("The final average is " + Math.round(final_avg) +
                     "<br><hr>Your letter grade is B<br><hr>Good work! <br><hr>")
                  break;

               case (final_avg >= 70):
                  document.getElementById("results").innerHTML = ("The final average is " + Math.round(final_avg) +
                     "<br><hr>Your letter grade is C<br><hr>Average work!<br><hr>")
                  break;

               case (final_avg >= 60):
                  document.getElementById("results").innerHTML = ("The final average is " + Math.round(final_avg) +
                     "<br><hr>Your letter grade is D<br><hr>Poor work!<br><hr>You must re-take the course<br><hr>")
                  break;

               default:
                  document.getElementById("results").innerHTML = ("The final average is " + Math.round(final_avg) +
                     "<br><hr>Your letter grade is F,\n failing work!<br><hr> You must re-take the course<br><hr>")

               
            }

            
         }

        
      }


      function res() {
         document.getElementById("results").innerHTML = "";
         document.getElementById("errOut").innerHTML = "";
      }

   
