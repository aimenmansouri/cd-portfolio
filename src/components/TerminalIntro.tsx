const ascii = `           @@@@@@@@        @@@@@          
          @@@@@@@@@@      @@@@@@           
         @@@@@@@@@@@@    @@@@@@@ @        
        @@@@@@  @@@@@@  @@@@@@@ @@@       
       @@@@@@@   @@@@@@ @@@@@@ @@@@@      
      @@@@@@@     @@@@@@ @@@@ @@@@@@@     
     @@@@@@@       @@@@@@ @@   @@@@@@@    
    @@@@@@@      @@ @@@@@@      @@@@@@@   
   @@@@@@@      @@@@ @@@@@@      @@@@@@@  
  @@@@@@@      @@@@@ @@@@@@       @@@@@@@ 
 @@@@@@@      @@@@@@@ @@@@@@       @@@@@@@ `.replace(/@/g, "a");
export default function Terminalintro() {
  return (
    <div className="mb-3 text-xs md:text-base">
      <p className="w whitespace-pre">{ascii}</p>
    </div>
  );
}
