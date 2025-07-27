/**
 * Team Component - Displays ZenYukti team members with social links
 * Features:
 * - Responsive grid layout for team member cards
 * - Interactive social media icons (GitHub, LinkedIn, Instagram, Discord)
 * - Smooth hover animations and transitions
 * - Modular structure for easy maintenance and scaling
 * - SEO-friendly markup with proper semantic HTML
 */

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Users, Heart } from "lucide-react";
import {
  PiUsersThreeLight,
  SiDiscord,
  SiLinkedin,
  SiGithub,
  SiInstagram,
  PiCodeSimple,
} from "@/components/icons";

/**
 * Interface for team member data structure
 * Ensures type safety and consistency across the component
 */
interface TeamMember {
  id: string;
  name: string;
  year: string;
  role?: string;
  email: string;
  github?: string;
  linkedin?: string;
  instagram?: string;
  discord?: string;
  avatar?: string;
  bio?: string;
  isFounder?: boolean;
}

/**
 * Interface for social link structure
 * Standardizes social media link handling
 */
interface SocialLink {
  platform: string;
  url: string;
  icon: React.ComponentType<any>;
  color: string;
}

const Team = () => {
  // State for managing loading states and interactions
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  /**
   * Core team members data
   * Contains all team member information with exact details as provided
   */
  const teamMembers: TeamMember[] = [
    // Founder
    {
      id: "ayush-sharma",
      name: "Ayush Hardeniya",
      subname: "(Legal Name: Ayush Sharma)",
      year: "2nd year",
      role: "Founder & Executive Head",
      email: "connect@ayushhardeniya.site",
      github: "https://github.com/ayushHardeniya",
      linkedin: "https://linkedin.com/in/ayushHardeniya",
      instagram: "https://instagram.com/ayush.hardeniya",
      discord: "https://discordapp.com/users/1372593502235525322",
      bio: "Driven to inspire collaboration and growth, building success together.",
      avatar: "https://ayushhardeniya.site/assets/portfolio/prof-image.png",
      isFounder: true,
    },
    // Core team members
    {
      id: "kaushal",
      name: "Kaushal",
      year: "3rd year",
      role: "Tech & Dev Lead",
      email: "ksharma17052005@gmail.com",
      discord: "https://discordapp.com/users/1350110343271153724",
    },

    {
      id: "ayush-raj",
      name: "AyRaj",
      year: "2nd year",
      role: "Tech & Dev Co-Lead",
      email: "ayushr94150@gmail.com",
      github: "https://github.com/ayushraaj-01",
      linkedin: "https://www.linkedin.com/in/ayush-raj-3849a1335",
      instagram: "https://instagram.com/ayush_raj2004",
      discord: "https://discordapp.com/users/1277273474104295504",
      avatar:
        "https://media.licdn.com/dms/image/v2/D5603AQE4BbHYOjtD6w/profile-displayphoto-shrink_200_200/B56ZcSx8bCG0AY-/0/1748366773137?e=1756339200&v=beta&t=recR-bW2CkaLXCGR2iz8VGDSxgtX-WNXo4lYvskaXsQ",
    },

    {
      id: "avishi-sharma",
      name: "Avishi Sharma",
      year: "2nd year",
      role: "PR & Outreach Lead",
      email: "avishisharma50@gmail.com",
      github: "https://github.com/avishisharma08",
      linkedin: "https://www.linkedin.com/in/avishi-sharma-12a2a2322",
      instagram: "https://instagram.com/avishisharma06",
      discord: "https://discordapp.com/users/1288525929907224616",
      avatar:
        "https://media.licdn.com/dms/image/v2/D5603AQFKEvZS3Q1-DA/profile-displayphoto-scale_200_200/B56ZfBW7gqH8Ag-/0/1751295705968?e=1756339200&v=beta&t=LluMeTEacpzEHxi6Xj-VYEGYwZTOQ1ob3uS0LyDnY1w",
    },

    {
      id: "ayush-shukla",
      name: "Ayush Shukla",
      year: "2nd year",
      role: "Social Media Lead",
      email: "nitianayush4141@gmail.com",
      github: "https://github.com/Ayushukla7",
      linkedin: "https://www.linkedin.com/in/ayush-shukla-844abb313",
      instagram: "https://instagram.com/ayushs_4141",
      discord: "https://discordapp.com/users/1377673941438562456",
      avatar:
        "https://media.licdn.com/dms/image/v2/D5603AQHbYXS61wFHoA/profile-displayphoto-shrink_200_200/B56ZWFOlJGHsAY-/0/1741696947894?e=1756339200&v=beta&t=Dwj3UAUlCx4hXCYwEu_elDiLhv9OfuZlfe8_BsUVja8",
    },

    {
      id: "anvita-shukla",
      name: "Anvita Shukla",
      year: "2nd year",
      role: "Design & Creative Lead",
      email: "anvitashukla2006@gmail.com",
      github: "https://github.com/ANVITA1126",
      linkedin: "https://www.linkedin.com/in/anvita-shukla-96a396308",
      discord: "https://discordapp.com/users/1374585138029006909",
      avatar:
        "https://media.licdn.com/dms/image/v2/D5603AQH4IrOB7ntM5w/profile-displayphoto-shrink_200_200/B56ZU4BBH2HEAY-/0/1740401546952?e=1756339200&v=beta&t=szltshJcKNTsBMdpJlTMT4kX2c3tzjr6F6rJ7Rp9Xh0",
    },

    {
      id: "avinash-shukla",
      name: "Avinash Kumar Shukla",
      year: "2nd year",
      role: "Operations Co-Lead",
      email: "avinashshukla.dev@gmail.com",
      github: "https://github.com/avinash-394",
      linkedin: "https://www.linkedin.com/in/avinashshukla394/",
      instagram: "https://instagram.com/avinash.shukla04",
      discord: "https://discordapp.com/users/509685531291025419",
      avatar:
        "https://media.licdn.com/dms/image/v2/D5603AQG1nzHhYYAsVg/profile-displayphoto-shrink_200_200/B56ZUn3SSRHsAY-/0/1740130560580?e=1756339200&v=beta&t=wJEYH-H53UdZsDEWJEP0n94FXt02_BGdy53UDvLreDw",
    },

    {
      id: "ashutosh-mishra",
      name: "Ashutosh Mishra",
      year: "2nd year",
      email: "talktoashutoshmishra@gmail.com",
      role: "Operations Co-Lead",
      github: "https://github.com/TheAshutoshMishra",
      linkedin: "https://www.linkedin.com/in/theashutoshmishra/",
      instagram: "https://instagram.com/pt__ashutosh_mishra",
      discord: "https://discordapp.com/users/1396699101399355523",
      avatar:
        "https://media.licdn.com/dms/image/v2/D4D03AQFrCj8GZX97rg/profile-displayphoto-shrink_200_200/B4DZcSfhdnGcAc-/0/1748361948934?e=1756339200&v=beta&t=yQ2LrB0q7bMBBCE4wTKNSI0MLLTlFhwOY6WX7QRACM8",
    },

    {
      id: "anand-vashishtha",
      name: "Anand Vashishtha",
      year: "2nd year",
      email: "anandcollege07@gmail.com",
      github: "https://github.com/Anand-0037",
      instagram: "https://instagram.com/anand_vash_03",
      discord: "https://discordapp.com/users/1256244561517482077",
      linkedin: "https://www.linkedin.com/in/anand-vashishtha-aba64b255",
      avatar:
        "https://media.licdn.com/dms/image/v2/D4D03AQELZjyaJ3LGiQ/profile-displayphoto-shrink_200_200/B4DZPImxA4HUAY-/0/1734237426910?e=1756339200&v=beta&t=f6WSU1Cd6P6oupgSP0dx_eVCwPU1XlvN9gCRvY0XTfA",
    },

    {
      id: "mohd-abbas",
      name: "Mohd. Abbas",
      year: "2nd year",
      email: "mr.mohdabbaszaidi@gmail.com",
      github: "https://github.com/homiethissid3",
      linkedin: "https://www.linkedin.com/in/mohd-abbas-84786920b",
      instagram: "https://instagram.com/click_by_abbas",
      discord: "https://discordapp.com/users/1364631551039766528",
      avatar:
        "https://media.licdn.com/dms/image/v2/D4D03AQGwj_sp7C8BVA/profile-displayphoto-shrink_200_200/B4DZahFcwkH0AY-/0/1746459284085?e=1756339200&v=beta&t=v9ioLYMoZBUOJwFTY3sr1DQ4D7l4pnmgmwWaTauDq4c",
    },

  ];

  /**
   * Generates social media links for a team member
   * @param member - The team member object
   * @returns Array of social link objects
   */
  const getSocialLinks = (member: TeamMember): SocialLink[] => {
    const links: SocialLink[] = [];

    // Email link (always present)
    if (member.email) {
      links.push({
        platform: "Email",
        url: `mailto:${member.email}`,
        icon: Mail,
        color: "text-blue-400 hover:text-blue-300",
      });
    }

    // GitHub link
    if (member.github) {
      links.push({
        platform: "GitHub",
        url: member.github,
        icon: SiGithub,
        color: "text-gray-300 hover:text-white",
      });
    }

    // LinkedIn link
    if (member.linkedin) {
      links.push({
        platform: "LinkedIn",
        url: member.linkedin,
        icon: SiLinkedin,
        color: "text-blue-400 hover:text-blue-300",
      });
    }

    // Instagram link
    if (member.instagram) {
      links.push({
        platform: "Instagram",
        url: member.instagram,
        icon: SiInstagram,
        color: "text-pink-400 hover:text-pink-300",
      });
    }
    // Discord link
    if (member.discord) {
      links.push({
        platform: "Discord",
        url: member.discord,
        icon: SiDiscord,
        color: "text-indigo-400 hover:text-indigo-300",
      });
    }

    return links;
  };

  /**
   * Handles image loading errors by setting fallback state
   * @param memberId - The ID of the member whose image failed to load
   */
  const handleImageError = (memberId: string) => {
    setImageErrors((prev) => ({ ...prev, [memberId]: true }));
  };

  /**
   * Generates avatar fallback initials from member name
   * @param name - The member's full name
   * @returns String of initials (max 2 characters)
   */
  const getInitials = (name: string): string => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          {/* Background gradient effects */}
          <div className="absolute inset-0 bg-gradient-dark opacity-50"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-neon-green/10 rounded-full blur-2xl"></div>

          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Meet Our </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Team
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              The passionate individuals behind ZenYukti's mission to
              democratize tech education and build inclusive learning
              communities.
            </p>

            {/* Team stats */}
            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-green mb-2">
                  {/*{teamMembers.length}*/} {/*Dynamic handler, don't remove it until our core team is small*/}
                  10+
                </div>
                <div className="text-muted-foreground">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-purple mb-2">
                  5+
                </div>
                <div className="text-muted-foreground">Domains</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-blue mb-2">
                  100+
                </div>
                <div className="text-muted-foreground">Community Members</div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-20 px-4 bg-dark-surface/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                Our Founder
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Meet the visionary who started ZenYukti with a dream to make
                tech education accessible to all.
              </p>
            </div>

            {/* Founder card */}
            {teamMembers
              .filter((member) => member.isFounder)
              .map((founder) => (
                <Card
                  key={founder.id}
                  className="max-w-2xl mx-auto bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                >
                  <CardContent className="p-8 text-center">
                    {/* Avatar */}
                    <div className="w-32 h-32 mx-auto mb-6 relative">
                      {!imageErrors[founder.id] && founder.avatar ? (
                        <img
                          src={founder.avatar}
                          alt={`${founder.name} - Founder`}
                          className="w-full h-full rounded-full object-cover border-4 border-gradient-primary"
                          onError={() => handleImageError(founder.id)}
                        />
                      ) : (
                        <div className="w-full h-full rounded-full bg-gradient-primary flex items-center justify-center text-white text-2xl font-bold border-4 border-primary/20">
                          {getInitials(founder.name)}
                        </div>
                      )}
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-neon-green rounded-full flex items-center justify-center">
                        <Heart className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Founder info */}
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {founder.name}
                    </h3>
                    <h6 className="text-2x1 text-foreground mb-2.5">
                      {founder.subname}
                    </h6>
                    <p className="text-lg text-primary mb-2">{founder.role}</p>
                    <p className="text-muted-foreground mb-4">{founder.year}</p>
                    {founder.bio && (
                      <p className="text-muted-foreground mb-6 italic">
                        {founder.bio}
                      </p>
                    )}

                    {/* Social links */}
                    <div className="flex justify-center space-x-4">
                      {getSocialLinks(founder).map((social, idx) => {
                        const IconComponent = social.icon;
                        return (
                          <a
                            key={idx}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 p-2 hover:bg-secondary/50 ${social.color} transition-all duration-200 hover:scale-110`}
                          >
                            <IconComponent className="w-5 h-5" />
                          </a>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </section>

        {/* Core Team Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                ZenCrew • The Core Team
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The dedicated individuals working together to build and grow the
                ZenYukti community.
              </p>
            </div>

            {/* Team grid - responsive layout */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {teamMembers
                .filter((member) => !member.isFounder)
                .map((member, index) => (
                  <Card
                    key={member.id}
                    className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <CardContent className="p-6 text-center">
                      {/* Avatar */}
                      <div className="w-20 h-20 mx-auto mb-4 relative">
                        {!imageErrors[member.id] && member.avatar ? (
                          <img
                            src={member.avatar}
                            alt={`${member.name} profile`}
                            className="w-full h-full rounded-full object-cover border-2 border-border"
                            onError={() => handleImageError(member.id)}
                          />
                        ) : (
                          <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-lg font-bold">
                            {getInitials(member.name)}
                          </div>
                        )}
                      </div>

                      {/* Member info */}
                      <h3 className="text-lg font-bold text-foreground mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm text-primary mb-2">{member.role}</p>
                      <p className="text-sm text-muted-foreground mb-4">
                        {member.year}
                      </p>

                      {/* Social links */}
                      <div className="flex justify-center space-x-2">
                        {getSocialLinks(member).map((social, idx) => {
                          const IconComponent = social.icon;
                          return (
                            <a
                              key={idx}
                              href={social.url !== "#" ? social.url : undefined}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`p-2 rounded-md hover:bg-secondary/50 ${
                                social.color
                              } transition-all duration-200 hover:scale-110 ${
                                social.url === "#"
                                  ? "pointer-events-none opacity-50"
                                  : ""
                              }`}
                            >
                              <IconComponent className="w-4 h-4" />
                            </a>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 bg-dark-surface/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                What Drives Us
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The core values and principles that guide our team in everything
                we do.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: PiUsersThreeLight,
                  title: "Collaboration",
                  description:
                    "We believe great things happen when diverse minds work together toward a common goal.",
                },
                {
                  icon: Heart,
                  title: "Inclusivity",
                  description:
                    "Everyone deserves equal opportunities to learn, grow, and contribute to the tech community.",
                },
                {
                  icon: PiCodeSimple,
                  title: "Innovation",
                  description:
                    "We constantly push boundaries and explore new ways to make tech education more accessible.",
                },
              ].map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card
                    key={index}
                    className="bg-card/50 backdrop-blur-sm border-border text-center"
                  >
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-4">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Join Team CTA */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <Card className="bg-gradient-primary p-8 border-0 max-w-3xl mx-auto">
              <CardContent className="p-0">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Want to Join Our Team?
                </h2>
                <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                  We're always looking for passionate individuals who share our
                  vision of democratizing tech education. Join us in making a
                  difference!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:zenyukti@ayushhardeniya.site"
                    className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-6 py-2 h-11 rounded-md bg-white text-primary hover:bg-white/90"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Contact Us
                  </a>

                  <a
                    href="https://discord.gg/HuBa9r33kW"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-6 py-2 h-11 rounded-md border border-white text-white hover:bg-white hover:text-primary"
                  >
                    <SiDiscord className="w-5 h-5 mr-2" />
                    Join Discord
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Team;
