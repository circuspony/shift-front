$.each($('.shortenedSelect option'), function (key, optionElement) {
  var curText = $(optionElement).text();
  $(this).attr('title', curText);

  //trim multiplier - increase it if the text overflow the input
  var trimMultiplier = 10;

  var lengthToShortenTo = Math.round(
    parseInt($(this).parent('select').css('max-width'), 10) / trimMultiplier
  );

  // trim if current text lenght is more than necessary
  if (curText.length > lengthToShortenTo) {
    $(this).text(curText.substring(0, lengthToShortenTo)).append('...');
  }
});
