import { Linkedin } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";

const Founders: React.FC = () => {
  const { t } = useTranslation();

  const founders = [
    {
      name: "Olu-Kayodé Karim Amadou",
      role: t("founders.roles.ceo"),
      image: "olu.jpeg",
      bio: t("founders.bios.olu"),
      social: {
        linkedin: "https://www.linkedin.com/in/olu-kayodekarim/",
        email: "olu.amadou@gmail.com",
      },
    },
    {
      name: "Aurélien Vandaële",
      role: t("founders.roles.cto"),
      image: "aurel.png",
      bio: t("founders.bios.aurelien"),
      social: {
        linkedin: "https://www.linkedin.com/in/aurelien-vandaele/",
        email: "aurelien.vandaele@crabbio.com",
      },
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t("founders.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("founders.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-xl group relative"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-teal-400/5 opacity-0 group-hover:opacity-100 transition-opacity -m-0.5"></div>

              <div className="relative">
                {/* Image */}
                <div className="mb-6 relative">
                  <div className="aspect-square overflow-hidden rounded-xl">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {founder.name}
                    </h3>
                    <p className="text-blue-600 font-medium">{founder.role}</p>
                  </div>

                  <p className="text-gray-600 text-sm">{founder.bio}</p>

                  {/* Social Links */}
                  <div className="flex space-x-4 pt-4">
                    <a
                      href={founder.social.linkedin}
                      className="text-gray-400 hover:text-blue-500 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href={`mailto:${founder.social.email}`}
                      className="text-gray-400 hover:text-blue-500 transition-colors"
                    >
                      <span className="text-sm">✉️ {founder.social.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
