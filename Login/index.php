<!doctype html>
<html>
  <head>

    <title>FreeLifers</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=0.9, maximum-scale=0.9, user-scalable=no, height=device-height" />
    <link rel="stylesheet" href="bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css?family=Dosis|Pacifico" rel="stylesheet">


  </head>
  <body>
    <div class="header container-fluid">
      <div class="row">
        <div class="col"></div>
        <div class="col-12 col-sm-8 col-md-6"><h1>FreeLifers</h1></div>
        <div class="col"></div>
      </div>
    </div>

    <br>
    <br>

    <div class="container-fluid">
      <div class="row">
        <div class="col"></div>
        <div class="col-10 col-sm-8 col-md-6 col-lg-4">
          <div class="form-container container" id='sign-form'>
            <h3>Log In</h3>
            <hr>
            <form class="form">
              <div class="form-group">
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                <input type="password" class="form-control down" id="exampleInputPassword1" placeholder="Password">
              </div>
              <button type="submit" class="btn btn-primary btn-large btn-block">Sign In</button>
            </form>
            <br>
            <h4 style="text-align:center">Don't have an account? <a href="#" onclick="signup()">Sign up</a></h4>
          </div>
        </div>
        <div class="col"></div>
      </div>
    </div>

    <script src="jquery.js"></script>
    <script src="bootstrap.min.js"></script>
    <script src="script.js"></script>
  </body>
</html>
