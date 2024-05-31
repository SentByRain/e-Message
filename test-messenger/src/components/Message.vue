<template>
    <div class = 'message-figure user-design'>
        <p class = 'user-text'>{{ message.text }} <div class = 'message-time user-text'> {{ message.time }}</div></p>
    </div> 
</template>

<script>
export default
{
    props:
    {
        message:
        {
            type: Object,
            required: true
        }
    }
}
</script>

<style>

.message-figure
{
  margin: 0 5%;

  min-width: 5%;
  max-width: 60%;

  padding: 5px 10px;

}

.user-design
{
  background: white;
  border-radius: 15px 0 15px 15px;
  float: right;
}

.contact-design
{
  background: #453377;
  border-radius: 0 15px 15px 15px;
  float: left;
}



.user-text
{
  color: black;
  text-align: left;
  font-size: small;
  word-wrap: break-word;

}

.contact-text
{
  color: white;
  text-align: left;
  font-size: small;
}

.message-time
{
    /* color:gray; */
    margin:10px 0 0 5px;
    float: right;
}

/* I don't know why, but p has margin */
p.user-text
{
  margin:5px 0;
  hyphens: auto;

}
</style>