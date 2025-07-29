import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Twitter, Users, Calendar, MessageCircle } from "lucide-react";
import { url } from "inspector";

const Community = () => {
  const socialPlatforms = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      //followers: "2.5K+",
      description: "Professional updates and industry insights",
      color: "text-blue-400",
      url: "https://www.linkedin.com/company/zenyukti/"
    },
    {
      name: "Instagram", 
      icon: Instagram,
      //followers: "1.8K+",
      description: "Behind the scenes and community highlights",
      color: "text-pink-400",
      url: "https://www.instagram.com/zenyukti/",
    },
    {
      name: "Twitter",
      icon: Twitter,
      //followers: "1.2K+", 
      description: "Quick updates and tech discussions",
      color: "text-blue-400",
      url: "https://x.com/zenyukti",
    }
  ];

  const teamRoles = [
    {
      role: "Social Media Department",
      description: "Manages our online presence across all platforms",
      responsibilities: ["Content strategy", "Community engagement", "Analytics tracking"]
    },
    {
      role: "Graphics & Creative Department",
      description: "Creates visual content and brand materials", 
      responsibilities: ["Social media graphics", "Event posters", "Brand identity"]
    },
    {
      role: "PR & Outreach",
      description: "Builds partnerships and expands our reach",
      responsibilities: ["Partnership development", "Event promotion", "Media relations"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-tight mb-6">
              <span className="text-foreground">Our </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Community</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Join a vibrant community of learners, builders, and innovators. 
              Connect with like-minded individuals and grow together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://discord.com/invite/HuBa9r33kW"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white w-full">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Join Discord
                </Button>
              </a>
              <a
                href="https://wagtsapp.com/zenyukti"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white w-full">
                  <Users className="w-5 h-5 mr-2" />
                  WhatsApp Group
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Community Stats */}
        <section className="py-20 px-4 bg-dark-surface/50">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-3xl font-bold text-primary mb-2">1800+</h3>
                <p className="text-muted-foreground">Total Members</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-3xl font-bold text-primary mb-2">35</h3>
                <p className="text-muted-foreground">Active Contributors</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-3xl font-bold text-primary mb-2">50+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-3xl font-bold text-primary mb-2">12</h3>
                <p className="text-muted-foreground">Mentors</p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Presence */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-12">
              Follow Our Journey
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {socialPlatforms.map((platform, index) => {
                const Icon = platform.icon;
                return (
                  <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 group">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-foreground">
                        {platform.name}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {platform.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="text-3xl font-bold text-primary mb-4">
                        {platform.followers}
                      </div>
                      <a
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button className="w-full bg-gradient-primary hover:opacity-90 text-white">
                          Follow Us
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Roles */}
        <section className="py-20 px-4 bg-dark-surface/50">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-12">
              Community Team
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {teamRoles.map((team, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {team.role}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {team.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-medium text-foreground mb-3">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {team.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Upcoming Events
            </h2>
            <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
              Join our regular events, workshops, and community meetups
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-foreground">Tech Talk Series</CardTitle>
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <CardDescription className="text-muted-foreground">
                    Weekly sessions with industry experts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Every Friday at 7 PM IST</p>
                  <Button className="bg-gradient-primary hover:opacity-90 text-white">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-foreground">Hackathon</CardTitle>
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <CardDescription className="text-muted-foreground">
                    Monthly 48-hour coding challenges
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">First weekend of every month</p>
                  <Button className="bg-gradient-primary hover:opacity-90 text-white">
                    Join Next Event
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Community;
