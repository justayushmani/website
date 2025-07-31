import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users,Calendar,} from "lucide-react";
import { SiDiscord ,SiWhatsapp,SiGithub} from "@/components/icons";

const Domains = () => {
  const domains = [
    {
      title: "Members",
      description: "Join our growing community of passionate learners and builders",
      icon: Users,
      action: "Join Community",
      links: [
        { name: "WhatsApp Group", url: "#", icon: SiWhatsapp },
        { name: "Discord Server", url: "#", icon: SiDiscord }
      ]
    },
    {
      title: "Active Contributors", 
      description: "Collaborate on real world projects and build your portfolio",
      icon: SiGithub,
      action: "Start Contributing",
      links: [
        { name: "GitHub Organization", url: "#", icon: SiGithub },
        { name: "Project Matching", url: "#", icon: Users }
      ]
    },
    {
      title: "Mentors",
      description: "Learn from experienced professionals and industry experts",
      icon: Calendar,
      action: "Apply as Mentor",
      links: [
        { name: "Mentor Application", url: "#", icon: Users },
        { name: "Upcoming Sessions", url: "#", icon: Calendar }
      ]
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
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Domains</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Choose your path in the ZenYukti community. Whether you're here to learn, 
              contribute, or mentor others, we have a place for you.
            </p>
          </div>
        </section>

        {/* Domains Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {domains.map((domain, index) => {
                const Icon = domain.icon;
                return (
                  <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 group">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-foreground">
                        {domain.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {domain.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {domain.links.map((link, linkIndex) => {
                        const LinkIcon = link.icon;
                        return (
                          <Button
                            key={linkIndex}
                            variant="outline"
                            className="w-full justify-start border-primary/30 text-foreground hover:bg-primary hover:text-white"
                            asChild
                          >
                            <a href={link.url}>
                              <LinkIcon className="w-4 h-4 mr-2" />
                              {link.name}
                            </a>
                          </Button>
                        );
                      })}
                      <Button className="w-full bg-gradient-primary hover:opacity-90 text-white">
                        {domain.action}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-4 bg-dark-surface/50">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Skills We Work With
            </h2>
            <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
              Our community spans across multiple domains and technologies
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                "React", "Node.js", "Python", "UI/UX", "DevOps", "ML/AI",
                "Flutter", "Blockchain", "Figma", "AWS", "Docker", "GraphQL"
              ].map((skill, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors duration-300"
                >
                  <span className="text-foreground font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Domains;