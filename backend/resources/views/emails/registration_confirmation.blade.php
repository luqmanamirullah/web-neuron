<!DOCTYPE html>
<html>
<head>
    <title>Registration Confirmation</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
    <div style="background-color: #fff; padding: 20px; border-radius: 5px; box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);">
        <h1 style="color: #333;">Registration Confirmation</h1>
        <h3>Hai {{ $userDetails['name'] }},</h3>
        <p>Your registration was successful. Here is your login information:</p>
        
        <p>Email:<strong>{{ $userDetails['email'] }}</strong></p>
        <p>Password:<strong>{{ $plainPassword }}</strong></p>
        
        <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;">
        
        <p style="color: #777;">Thank you for registering with us.</p>
    </div>
    
    <p style="margin-top: 20px; font-size: 12px; color: #777;">&copy; 2023 Your Company. All rights reserved.</p>
</body>
</html>