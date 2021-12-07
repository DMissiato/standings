
import { localData } from "./utils.js";


const Export = () =>
{
    const wb = XLSX.utils.book_new();

    wb.Props = {
        Title: 'Export Standings',
        Subject: 'Classifica utenti',
        Author: 'Davide Missiato',
        CreatedDate: new Date(2017,12,19)
    };

    wb.SheetNames.push("Standings");

    const ws_data = localData.map((user) => { return [user.points, user.username, user.name, user.email]; });
    const ws = XLSX.utils.aoa_to_sheet(ws_data);

    wb.Sheets["Standings"] = ws;

    let wbout = XLSX.write(wb, {bookType:'xlsx',  type: 'binary'});

    const s2ab = (s) =>
    { 
        const buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
        let view = new Uint8Array(buf);  //create uint8array as viewer
        
        for (var i=0; i<s.length; i++) 
            view[i] = s.charCodeAt(i) & 0xFF; //convert to octet
        
        return buf;    
    }

    saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'standings.xlsx');
}

export {
    Export
}
