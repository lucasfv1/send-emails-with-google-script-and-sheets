/**
 * Sends emails with data from the current spreadsheet.
 */

// https://developers.google.com/apps-script/guides/services/quotas

function sendEmails() {
  try{    
    const sheet = SpreadsheetApp.getActiveSheet(); // Gets the worksheet to be used
    let startRow = 2; // First line to be processed (the numbering here starts at 1 and not 0)
    let numRows = 1; // Number of lines to be processed (exact number of lines to be traversed in the file)
     
    // startRow: startRow: start row of range
    // 1: initial column of the range
    // numRows: number of rows to be returned
    // 10: number of columns to be returned
    // Com base nos comentários acima, seria selecionado o intervalo: A2:J1
    const dataRange = sheet.getRange(startRow, 1, numRows, 10);
    
    // loop through the lines obtained
    const data = dataRange.getValues();
    for (let row of data) {

      const numInsc = row[0]; // Get the value of the first column
      const emailAddress = row[1]; // Gets the value of the second column

      const resultadoComissao1 = row[2]; // Gets the value of the third column
      const parecer1 = row[3]; // Get the value of the fourth column

      const resultadoComissao2 = row[4]; // Gets the value of the fifth column
      const parecer2 = row[5]; // Gets the value of the sixth column

      const resultadoComissao3 = row[6]; // Gets the value of the seventh column
      const parecer3 = row[7]; // Gets the value of the eighth column

      const resultadoComissao4 = row[8]; // Gets the value of the ninth column
      const parecer4 = row[9]; // Gets the value of the tenth column

      // Fill in the message by inserting the values obtained in the above variables
      const fullMessage = "Olá, candidato(a) inscrição: " + numInsc + ". \n\n" + "Informamos que sua documentação foi analisada pela(s) comissão(ões) de seleção e o(s) parecere(s) é(são) o(s) que segue(m): \n\nParecer da Comissão de Escolaridade: " + parecer1 + ". \n" + "Resultado da Comissão de Escolaridade: "+ resultadoComissao1 +".\n\nParecer da Comissão de Heteroidentificação: "+ parecer2 +".\nResultado da Comissão de Heteroidentificação: "+ resultadoComissao2 +".\n\nParecer da Comissão de Análise da Realidade Sócioeconômica: "+ parecer3 +".\nResultado Comissão de Análise da Realidade Sócioeconômica: "+ resultadoComissao3 +".\n\nParecer da Comissão de Verificação da Condição de Deficiência: "+ parecer4 +".\nResultado da Comissão de Verificação da Condição de Deficiência: "+ resultadoComissao4 +".\n\nO recurso contra o(s) indeferimento(s) poderá ser interposto na página <https://teste.com.br> no prazo previsto no Cronograma (Anexo II - Cronograma), dias 03 e 04/04/23, sendo responsável por eventuais prejuízos se não o fizer. Em caso de dúvidas, o(a) candidato(a) poderá entrar em contato com a Comissão de Processos Seletivos e-mail <teste@teste.com.br>, para obter mais informações.";
    
    // Set the email subject field
    let subject = 'Parecer de Indeferimento - Processo Seletivo 2023';
      // Send the emails
      MailApp.sendEmail(emailAddress, subject, fullMessage);
    }
  }
  catch(err){
    Logger.log(err)
  }
}

