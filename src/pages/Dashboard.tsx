import React, { useState } from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin, User, Bell, Ticket, Award, Settings, QrCode, CreditCard } from "lucide-react";
import TokenSystem from "@/components/dashboard/TokenSystem";
import QRCodePayment from "@/components/payment/QRCodePayment";
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

const Dashboard = () => {
  const userTokens = 15;
  const [showPayment, setShowPayment] = useState(false);
  const [cartAmount, setCartAmount] = useState(49.99);
  
  const upcomingEvents = [
    {
      title: "Web Development Workshop",
      date: "April 15, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Main Campus, Room 302"
    },
    {
      title: "Data Science Bootcamp",
      date: "April 20, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Tech Hub, Conference Room"
    }
  ];
  
  const notifications = [
    {
      message: "Your registration for 'Design Thinking Session' is confirmed",
      time: "2 hours ago"
    },
    {
      message: "New event 'Python for Beginners' announced",
      time: "Yesterday"
    },
    {
      message: "You earned 5 tokens for attending 'AI Workshop'",
      time: "3 days ago"
    }
  ];

  const handlePaymentComplete = () => {
    setShowPayment(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="den-container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome, John</h1>
              <p className="text-den-gray">
                Here's what's happening in your Learners Den journey
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center gap-3">
              <div className="flex items-center bg-den-purple/10 rounded-full px-4 py-2">
                <Ticket size={18} className="text-den-purple mr-2" />
                <span className="font-medium text-den-purple">{userTokens} Tokens</span>
              </div>
              <AlertDialog open={showPayment} onOpenChange={setShowPayment}>
                <AlertDialogTrigger asChild>
                  <Button 
                    variant="outline"
                    className="flex items-center gap-2 border-den-purple text-den-purple hover:bg-den-purple/10"
                  >
                    <QrCode size={18} />
                    Pay with QR
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="max-w-md">
                  <QRCodePayment 
                    amount={cartAmount} 
                    onPaymentComplete={handlePaymentComplete} 
                  />
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Calendar size={18} className="mr-2 text-den-purple" />
                  Your Events
                </CardTitle>
                <CardDescription>
                  Events you've registered for
                </CardDescription>
              </CardHeader>
              <CardContent>
                {upcomingEvents.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingEvents.map((event, index) => (
                      <div key={index} className="bg-secondary rounded-lg p-4">
                        <h3 className="font-medium mb-2">{event.title}</h3>
                        <div className="text-sm text-den-gray space-y-1">
                          <div className="flex items-center">
                            <Calendar size={14} className="mr-2" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock size={14} className="mr-2" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin size={14} className="mr-2" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-6 text-den-gray">
                    You haven't registered for any events yet.
                  </div>
                )}
                <div className="mt-4">
                  <Button variant="link" className="text-den-purple w-full">
                    View All Events
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Bell size={18} className="mr-2 text-den-purple" />
                  Notifications
                </CardTitle>
                <CardDescription>
                  Recent updates and alerts
                </CardDescription>
              </CardHeader>
              <CardContent>
                {notifications.length > 0 ? (
                  <div className="space-y-4">
                    {notifications.map((notification, index) => (
                      <div key={index} className="border-b border-border last:border-0 pb-3 last:pb-0">
                        <p className="text-sm mb-1">{notification.message}</p>
                        <span className="text-xs text-den-gray">{notification.time}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-6 text-den-gray">
                    No new notifications.
                  </div>
                )}
                <div className="mt-4">
                  <Button variant="link" className="text-den-purple w-full">
                    View All Notifications
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <TokenSystem userTokens={userTokens} />
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Explore Resources</CardTitle>
              <CardDescription>
                Additional materials to enhance your learning journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-secondary p-6 rounded-lg text-center hover:bg-den-purple/10 transition-colors">
                  <h3 className="font-semibold mb-2">Learning Paths</h3>
                  <p className="text-sm text-den-gray mb-4">Structured learning journeys for different skills</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Explore
                  </Button>
                </div>
                <div className="bg-secondary p-6 rounded-lg text-center hover:bg-den-purple/10 transition-colors">
                  <h3 className="font-semibold mb-2">Project Repository</h3>
                  <p className="text-sm text-den-gray mb-4">Collaborative projects from our community</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Browse
                  </Button>
                </div>
                <div className="bg-secondary p-6 rounded-lg text-center hover:bg-den-purple/10 transition-colors">
                  <h3 className="font-semibold mb-2">Study Groups</h3>
                  <p className="text-sm text-den-gray mb-4">Join groups focused on specific topics</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Join
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
