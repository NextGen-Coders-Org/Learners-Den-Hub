
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Coins, ArrowRight } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface TokenSystemProps {
  userTokens: number;
}

const TokenSystem: React.FC<TokenSystemProps> = ({ userTokens }) => {
  const [showTokenInfo, setShowTokenInfo] = useState(false);
  
  const exchangeRates = [
    { tokens: 10, value: "$1 Discount" },
    { tokens: 25, value: "$3 Discount" },
    { tokens: 50, value: "$7 Discount" },
    { tokens: 100, value: "$15 Discount" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Coins size={20} className="mr-2 text-den-purple" />
          Den Tokens
        </CardTitle>
        <CardDescription>
          Earn and redeem tokens for rewards
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="bg-gradient-to-r from-den-purple/20 to-purple-100/30 p-6 rounded-xl mb-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-den-gray mb-1">Available Balance</p>
              <div className="flex items-center">
                <Coins size={24} className="text-den-purple mr-2" />
                <span className="text-3xl font-bold text-den-purple">{userTokens}</span>
              </div>
            </div>
            <Button 
              variant="default" 
              className="bg-den-purple hover:bg-den-purple/90"
              onClick={() => setShowTokenInfo(true)}
            >
              Use Tokens
            </Button>
          </div>
        </div>
        
        <h3 className="text-lg font-medium mb-3">How to earn more tokens</h3>
        <ul className="space-y-3 mb-6">
          <li className="flex justify-between bg-secondary p-3 rounded-lg">
            <span>Attend an event</span>
            <span className="font-medium flex items-center">
              <Coins size={16} className="text-den-purple mr-1" /> 5
            </span>
          </li>
          <li className="flex justify-between bg-secondary p-3 rounded-lg">
            <span>Join a workshop</span>
            <span className="font-medium flex items-center">
              <Coins size={16} className="text-den-purple mr-1" /> 10
            </span>
          </li>
          <li className="flex justify-between bg-secondary p-3 rounded-lg">
            <span>Complete a course</span>
            <span className="font-medium flex items-center">
              <Coins size={16} className="text-den-purple mr-1" /> 25
            </span>
          </li>
          <li className="flex justify-between bg-secondary p-3 rounded-lg">
            <span>Contribute to a project</span>
            <span className="font-medium flex items-center">
              <Coins size={16} className="text-den-purple mr-1" /> 15
            </span>
          </li>
        </ul>

        <AlertDialog open={showTokenInfo} onOpenChange={setShowTokenInfo}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Token Exchange</AlertDialogTitle>
              <AlertDialogDescription>
                Exchange your tokens for these rewards:
              </AlertDialogDescription>
            </AlertDialogHeader>
            <div className="py-4 space-y-4">
              {exchangeRates.map((rate, index) => (
                <div key={index} className="flex justify-between items-center border-b pb-3 last:border-0">
                  <div className="flex items-center">
                    <Coins size={18} className="text-den-purple mr-2" />
                    <span>{rate.tokens} Tokens</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">{rate.value}</span>
                    <Button 
                      size="sm" 
                      disabled={userTokens < rate.tokens}
                      variant="outline"
                      className="text-xs"
                    >
                      Redeem
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <AlertDialogFooter>
              <AlertDialogCancel>Close</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardContent>
    </Card>
  );
};

export default TokenSystem;
