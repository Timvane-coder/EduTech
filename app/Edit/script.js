$(document).ready(function () {
  // Initialize forms
  updateWiFiCard();
  updateDNSCard();

  // WiFi form updates
  $('#network-name').on('input', updateWiFiCard);
  $('#security-type').on('change', updateWiFiCard);
  $('#network-password').on('input', updateWiFiCard);
  $('#metered').on('change', updateWiFiCard);
  $('#randomized').on('change', updateWiFiCard);

  // DNS form updates                                   $('#dns-mode').on('change', updateDNSCard);
  $('#dns-provider').on('input', updateDNSCard);
  $('#encryption').on('change', updateDNSCard);
  $('#logging').on('change', updateDNSCard);            $('#filtering').on('change', updateDNSCard);
  $('#custom-provider-input').on('input', updateDNSCard);
  $('.add-button').on('click', function (e) {
    e.preventDefault();                                   const customProvider = $('#custom-provider-input').val();
    if (customProvider) {
      $('.provider').first().find('span').text(customProvider);
      $('#dns-provider').val(customProvider);
      updateDNSCard();
    }                                                   });

  // WiFi card update function
  function updateWiFiCard() {
    const ssid = $('#network-name').val() || 'MyWiFiNetwork';                                                   const security = $('#security-type').val() || 'WPA2-Personal';                                              const password = $('#network-password').val() || 'secure123';
    const metered = $('#metered').is(':checked') ? 'Yes' : 'No';
    const randomized = $('#randomized').is(':checked') ? 'Randomized MAC' : 'Device MAC';

    $('#wifi-card-ssid').text(ssid);
    $('#wifi-card-ssid-back').text(ssid);
    $('#wifi-card-security').text(security);
    $('#wifi-card-password').text(password);
    $('#wifi-card-metered').text(metered);                $('#wifi-card-randomized').text(randomized);        }

  // DNS card update function
  function updateDNSCard() {
    const mode = $('#dns-mode').val() || 'Private DNS';
    const provider = $('#dns-provider').val() || 'dns.google';                                                  const encryption = $('#encryption').is(':checked') ? 'Encrypted' : 'Unencrypted';
    const logging = $('#logging').is(':checked') ? 'Logs enabled' : 'No logs';
    const filtering = $('#filtering').is(':checked') ? 'Malware blocked' : 'No filtering';

    $('#dns-card-mode').text(mode);
    $('#dns-card-provider').text(provider);               $('#dns-card-encryption').text(encryption);
    $('#dns-card-logging').text(logging);                 $('#dns-card-filtering').text(filtering);
  }                                                   
  // Handle connect/save buttons                        $('.btn').on('click', function (e) {
    e.preventDefault();
    alert('Button clicked! Implement connection/save logic here.');                                           });
});
