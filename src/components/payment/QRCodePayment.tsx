
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { QrCode, Upload } from "lucide-react";
import { toast } from "sonner";

interface QRCodePaymentProps {
  amount: number;
  onPaymentComplete?: () => void;
}

const QRCodePayment: React.FC<QRCodePaymentProps> = ({ amount, onPaymentComplete }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  
  const form = useForm({
    defaultValues: {
      notes: "",
    },
  });

  // Generate a fake QR code URL (in a real app this would come from your payment processor)
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=Payment_${amount}_USD_${Date.now()}`;
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsUploading(true);
      
      // Create a preview of the uploaded image
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string);
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const onSubmit = (data: { notes: string }) => {
    if (!uploadedImage) {
      toast.error("Please upload a screenshot of your payment");
      return;
    }
    
    // In a real app, you would send this to your server for verification
    console.log("Payment verification submitted", { 
      amount, 
      uploadedImage, 
      notes: data.notes 
    });
    
    toast.success("Payment verification submitted successfully");
    
    if (onPaymentComplete) {
      onPaymentComplete();
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center">
          <QrCode size={20} className="mr-2 text-den-purple" />
          QR Code Payment
        </CardTitle>
        <CardDescription>
          Scan the QR code and upload payment screenshot
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col items-center bg-secondary p-6 rounded-xl">
          <p className="mb-4 text-lg font-medium">Total Amount: ${amount.toFixed(2)}</p>
          <div className="border-4 border-white rounded-lg bg-white p-1 mb-4">
            <img src={qrCodeUrl} alt="Payment QR Code" className="w-48 h-48" />
          </div>
          <p className="text-sm text-den-gray text-center">
            Scan this QR code with your payment app to make the payment
          </p>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <FormLabel>Upload Payment Screenshot</FormLabel>
              <div className="border-2 border-dashed border-den-purple/30 rounded-lg p-6 text-center cursor-pointer hover:bg-den-purple/5 transition-colors">
                {uploadedImage ? (
                  <div className="flex flex-col items-center">
                    <img 
                      src={uploadedImage} 
                      alt="Payment screenshot" 
                      className="max-h-48 mb-2 rounded-lg" 
                    />
                    <p className="text-sm text-den-purple font-medium">
                      Screenshot uploaded
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center py-4">
                    <Upload size={32} className="text-den-purple mb-2" />
                    <p className="text-sm font-medium mb-1">
                      Click to upload payment screenshot
                    </p>
                    <p className="text-xs text-den-gray">
                      PNG, JPG or JPEG (max 5MB)
                    </p>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="screenshot-upload"
                  onChange={handleFileChange}
                  disabled={isUploading}
                />
                <label 
                  htmlFor="screenshot-upload"
                  className="absolute inset-0 cursor-pointer"
                ></label>
              </div>
            </div>
            
            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Notes (Optional)</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Add any payment reference or notes here" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button 
              type="submit" 
              className="w-full bg-den-purple hover:bg-den-purple/90"
              disabled={isUploading || !uploadedImage}
            >
              Submit Payment Verification
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <p className="text-xs text-den-gray text-center">
          Your payment will be verified within 24 hours. You'll receive tokens once verified.
        </p>
      </CardFooter>
    </Card>
  );
};

export default QRCodePayment;
