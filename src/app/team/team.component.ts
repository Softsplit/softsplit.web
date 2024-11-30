import { Component, OnInit } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';

interface TeamMember {
    name: string;
    role: string;
    avatarUrl: string;
    bio?: string;
    links: {
        github?: string;
        youtube?: string;
        twitter?: string;
        bluesky?: string;
    };
}

@Component({
    selector: 'app-team',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="font-['League_Spartan'] min-h-screen bg-[#1f1a16] text-white pt-32 pb-20">
      <div class="container mx-auto px-4 mb-16">
        <div class="text-center">
          <h1 class="text-5xl font-bold mb-1">Our Team</h1>
          <div class="w-24 h-1 bg-[#fe8310] mx-auto rounded-full mb-6"></div>
          <p class="text-lg text-gray-300 max-w-2xl mx-auto">
            Meet the passionate individuals behind Softsplit who are dedicated to creating amazing gaming experiences.
          </p>
        </div>
      </div>
      <div class="container mx-auto mb-20 px-4">
          <div class="flex flex-wrap justify-center gap-6">
            @for (member of teamMembers; track member.name) {
              <div class="flex-shrink-0 w-[260px] h-[320px] relative
                    group rounded-xl overflow-hidden
                    transform transition-all duration-300 hover:scale-105 
                    shadow-lg hover:shadow-[#fe8310]/20 hover:shadow-xl
                    border border-transparent hover:border-[#fe8310]/20">
                <!-- Background image with gradient overlay -->
                <div class="absolute inset-0">
                    <img [src]="member.avatarUrl" [alt]="member.name" 
                         class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-[#1f1a16] from-40% to-transparent 
                              opacity-90 group-hover:opacity-95 transition-opacity duration-300"></div>
                </div>

                <!-- Bio quote on hover at top -->
                <div class="absolute inset-x-0 top-0 p-6 transform -translate-y-4 opacity-0 
                            group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                    @if (member.bio) {
                        <div class="relative">
                            <p class="text-white text-center drop-shadow-lg text-lg italic line-clamp-3 leading-relaxed">
                                "{{member.bio}}"
                            </p>
                        </div>
                    }
                </div>
                <div class="absolute inset-x-0 bottom-0 transform translate-y-8 group-hover:translate-y-0 
                            transition-transform duration-300 ease-out">
                    <div class="p-6">
                        <div class="mb-3">
                            <h3 class="text-xl font-bold text-white group-hover:text-[#fe8310] transition-colors duration-300
                                    truncate w-full" [title]="member.name">{{member.name}}</h3>
                            <span class="inline-block px-3 py-1 rounded-full bg-[#fe8310]/10 text-[#fe8310] text-sm font-medium mt-2">
                                {{member.role}}
                            </span>
                        </div>
                        <div class="flex items-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                            @if (member.links.github) {
                                <a [href]="member.links.github" target="_blank">
                                    <img class="w-fit h-5 [filter:brightness(0)_saturate(100%)_invert(0.6)] hover:[filter:brightness(0)_saturate(100%)_invert(0.6)_sepia(1)_saturate(20)_hue-rotate(360deg)]" src="socials/github.svg" />
                                </a>
                            }
                            @if (member.links.youtube) {
                                <a [href]="member.links.youtube" target="_blank">
                                    <img class="w-fit h-5 [filter:brightness(0)_saturate(100%)_invert(0.6)] hover:[filter:brightness(0)_saturate(100%)_invert(0.6)_sepia(1)_saturate(20)_hue-rotate(360deg)]" src="socials/youtube.svg" />
                                </a>
                            }
                            @if (member.links.twitter) {
                                <a [href]="member.links.twitter" target="_blank">
                                    <img class="w-fit h-5 [filter:brightness(0)_saturate(100%)_invert(0.6)] hover:[filter:brightness(0)_saturate(100%)_invert(0.6)_sepia(1)_saturate(20)_hue-rotate(360deg)]" src="socials/twitter.svg" />
                                </a>
                            }
                            @if (member.links.bluesky) {
                                <a [href]="member.links.bluesky" target="_blank">
                                    <img class="w-fit h-5 [filter:brightness(0)_saturate(100%)_invert(0.6)] hover:[filter:brightness(0)_saturate(100%)_invert(0.6)_sepia(1)_saturate(20)_hue-rotate(360deg)]" src="socials/bluesky.svg" />
                                </a>
                            }
                        </div>
                    </div>
                </div>
              </div>
            }
          </div>
      </div>
      <div class="container mx-auto px-8">
        <div class="max-w-5xl mx-auto">
          <div class="bg-gradient-to-r from-[#332416] to-[#1f1a16] rounded-xl overflow-hidden relative mb-8 md:mb-16">
            <div class="absolute inset-0 bg-[#fe8310]/5"></div>
            <div class="relative p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div class="text-center md:text-left">
                <h2 class="text-2xl font-bold mb-2">Want to join our team?</h2>
                <p class="text-gray-300 max-w-xl">
                  We're always looking for passionate individuals to join our creative journey. Share your story with us!
                </p>
              </div>
              <a href="https://forms.gle/abQZgnRJSKZbbTs19" 
                 target="_blank"
                 class="w-full md:w-fit px-5 py-3 bg-[#fe8310] text-white rounded-md hover:bg-[#ff9635] transition-colors 
                        inline-flex items-center justify-center gap-1.5 font-semibold whitespace-nowrap">
                <span class="material-symbols-outlined text-[20px] translate-y-[-2px]">rocket_launch</span>
                Apply now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    `
})
export class TeamComponent implements OnInit {
    constructor(private viewportScroller: ViewportScroller) {}

    ngOnInit() {
        // Scroll to top when the team component initializes
        this.viewportScroller.scrollToPosition([0, 0]);
    }

    readonly teamMembers: TeamMember[] = [
        {
            name: 'Asphaltian',
            role: 'CEO & Founder',
            avatarUrl: '/team/asphaltian.jpg',
            bio: 'He went out for milk and didn\'t come back for 10 years.',
            links: {
                github: 'https://github.com/Asphaltian',
                twitter: 'https://twitter.com/realAsphaltian',
                bluesky: 'https://bsky.app/profile/asphaltian.bsky.social'
            }
        },
        {
            name: 'TROLLFACEINREALLIFE',
            role: 'Programmer',
            avatarUrl: '/team/trollfaceinreallife.png',
            bio: 'Tobuscus fan',
            links: {
                github: 'https://github.com/SwagAccount',
                youtube: 'https://www.youtube.com/@thehumbleonion5280'
            }
        },
        {
            name: 'arad',
            role: 'UI Designer',
            avatarUrl: '/team/arad.png',
            bio: 'Destroyer of bad UIs.',
            links: {
                github: 'https://github.com/araddev'
            }
        }
    ];
}