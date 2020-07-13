<?php

/*
 * Suggession for improvement 
 * use GetEmbededHTMlTemplate as class use as dependencies injection or any other way 
 * */


interface PassangerBoardingInterface {
	
		public function ArrageBoardingTicket(string $from, string $to, string $instruction) ;
		
		public function GetEmbededHTMlTemplate ( $template, $regrex);
	}

class PassengerBoardingSorterOOP implements PassangerBoardingInterface{
		
		
		// Boarding list 
		public $boardingList;
		
		// Journey start message 
		public $startMessage = '';
		
		// End message 
		public $endMessage = '';
		
		// Get Template 
		public $getTemplate = '';
		
		
		
		public function __construct(array $boardingList ) 
		{
			$this->boardingList = $boardingList;
		}
		
		public function ArrageBoardingTicket(string $from, string $to , string $instruction)
		{
			foreach($this->boardingList as $boardingList)
			{
				
				usort($this->boardingList, function ($a, $b) use ($to, $from){
					
                      return ($a[$to] === $b[$from] ) ? 0 : 1;
				});
			}
			
			
				// Defining index 
			$i = 0;
			
			$coutboarding = count($this->boardingList);
			
			// Appending data to start index 
			$this->boardingList[0][$instruction] = $this->startMessage;
			
			// Appending string to end column 
			$this->boardingList[$coutboarding - 1 ][$instruction] = $this->endMessage;
			
			
		}
		
		public function GetEmbededHTMlTemplate($template, $regrex)
		{
			$result = '';

			/* Loop each data */
			for($j = 0; $j < count($this->boardingList); $j++)
			{
			/* Get the template  */
			
			$output = $template;
			/* where indexs matches in template  */
			foreach($this->boardingList[$j] as $key => $value)
			{
				$reg = str_replace('(.*?)',$key, $regrex);

				
				/* Check with regular expression */
				if(preg_match($reg,$template))
				{
					/* Replace with */
					$output = preg_replace($reg,$value,$output);
					

				}			
				
			}

			 $result .= $output;
		}


			$this->getTemplate = $result;

		}

		
		
		

}
