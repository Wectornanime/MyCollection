import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SteamGridDbService } from '../../services/steam-grid-db.service';
import { MobyGamesApiService } from '../../services/moby-games-api.service';

interface plt  {
  platforms:{
    platform_id: number;
    platform_name: string;
  }[]
}

@Component({
  selector: 'app-add-game.page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-game.page.component.html',
  styleUrl: './add-game.page.component.scss',
  providers: [SteamGridDbService]
})
export class AddGamePageComponent {

  plID!: number;

  plataformList:plt = {
    "platforms": [
        {
            "platform_id": 253,
            "platform_name": "1292 Advanced Programmable Video System"
        },
        {
            "platform_id": 35,
            "platform_name": "3DO"
        },
        {
            "platform_id": 318,
            "platform_name": "ABC 80"
        },
        {
            "platform_id": 213,
            "platform_name": "APF MP1000/Imagination Machine"
        },
        {
            "platform_id": 117,
            "platform_name": "Acorn 32-bit"
        },
        {
            "platform_id": 210,
            "platform_name": "Adventure Vision"
        },
        {
            "platform_id": 305,
            "platform_name": "AirConsole"
        },
        {
            "platform_id": 194,
            "platform_name": "Alice 32/90"
        },
        {
            "platform_id": 265,
            "platform_name": "Altair 680"
        },
        {
            "platform_id": 222,
            "platform_name": "Altair 8800"
        },
        {
            "platform_id": 237,
            "platform_name": "Amazon Alexa"
        },
        {
            "platform_id": 19,
            "platform_name": "Amiga"
        },
        {
            "platform_id": 56,
            "platform_name": "Amiga CD32"
        },
        {
            "platform_id": 60,
            "platform_name": "Amstrad CPC"
        },
        {
            "platform_id": 136,
            "platform_name": "Amstrad PCW"
        },
        {
            "platform_id": 91,
            "platform_name": "Android"
        },
        {
            "platform_id": 286,
            "platform_name": "Antstream"
        },
        {
            "platform_id": 245,
            "platform_name": "Apple I"
        },
        {
            "platform_id": 31,
            "platform_name": "Apple II"
        },
        {
            "platform_id": 51,
            "platform_name": "Apple IIgs"
        },
        {
            "platform_id": 143,
            "platform_name": "Arcade"
        },
        {
            "platform_id": 162,
            "platform_name": "Arcadia 2001"
        },
        {
            "platform_id": 215,
            "platform_name": "Arduboy"
        },
        {
            "platform_id": 241,
            "platform_name": "Astral 2000"
        },
        {
            "platform_id": 28,
            "platform_name": "Atari 2600"
        },
        {
            "platform_id": 33,
            "platform_name": "Atari 5200"
        },
        {
            "platform_id": 34,
            "platform_name": "Atari 7800"
        },
        {
            "platform_id": 39,
            "platform_name": "Atari 8-bit"
        },
        {
            "platform_id": 24,
            "platform_name": "Atari ST"
        },
        {
            "platform_id": 319,
            "platform_name": "Atari VCS"
        },
        {
            "platform_id": 129,
            "platform_name": "Atom"
        },
        {
            "platform_id": 92,
            "platform_name": "BBC Micro"
        },
        {
            "platform_id": 63,
            "platform_name": "BREW"
        },
        {
            "platform_id": 160,
            "platform_name": "Bally Astrocade"
        },
        {
            "platform_id": 165,
            "platform_name": "BeOS"
        },
        {
            "platform_id": 90,
            "platform_name": "BlackBerry"
        },
        {
            "platform_id": 290,
            "platform_name": "Blacknut"
        },
        {
            "platform_id": 168,
            "platform_name": "Blu-ray Disc Player"
        },
        {
            "platform_id": 84,
            "platform_name": "Browser"
        },
        {
            "platform_id": 231,
            "platform_name": "Bubble"
        },
        {
            "platform_id": 73,
            "platform_name": "CD-i"
        },
        {
            "platform_id": 83,
            "platform_name": "CDTV"
        },
        {
            "platform_id": 216,
            "platform_name": "COSMAC"
        },
        {
            "platform_id": 261,
            "platform_name": "CP/M"
        },
        {
            "platform_id": 154,
            "platform_name": "Camputers Lynx"
        },
        {
            "platform_id": 124,
            "platform_name": "Casio Loopy"
        },
        {
            "platform_id": 125,
            "platform_name": "Casio PV-1000"
        },
        {
            "platform_id": 306,
            "platform_name": "Casio Programmable Calculator"
        },
        {
            "platform_id": 298,
            "platform_name": "Champion 2711"
        },
        {
            "platform_id": 76,
            "platform_name": "Channel F"
        },
        {
            "platform_id": 188,
            "platform_name": "ClickStart"
        },
        {
            "platform_id": 156,
            "platform_name": "Coleco Adam"
        },
        {
            "platform_id": 29,
            "platform_name": "ColecoVision"
        },
        {
            "platform_id": 197,
            "platform_name": "Colour Genie"
        },
        {
            "platform_id": 61,
            "platform_name": "Commodore 128"
        },
        {
            "platform_id": 115,
            "platform_name": "Commodore 16, Plus/4"
        },
        {
            "platform_id": 27,
            "platform_name": "Commodore 64"
        },
        {
            "platform_id": 77,
            "platform_name": "Commodore PET/CBM"
        },
        {
            "platform_id": 277,
            "platform_name": "Compal 80"
        },
        {
            "platform_id": 243,
            "platform_name": "Compucolor I"
        },
        {
            "platform_id": 198,
            "platform_name": "Compucolor II"
        },
        {
            "platform_id": 238,
            "platform_name": "Compucorp Programmable Calculator"
        },
        {
            "platform_id": 212,
            "platform_name": "CreatiVision"
        },
        {
            "platform_id": 301,
            "platform_name": "Cybervision"
        },
        {
            "platform_id": 2,
            "platform_name": "DOS"
        },
        {
            "platform_id": 166,
            "platform_name": "DVD Player"
        },
        {
            "platform_id": 285,
            "platform_name": "Danger OS"
        },
        {
            "platform_id": 204,
            "platform_name": "Dedicated console"
        },
        {
            "platform_id": 205,
            "platform_name": "Dedicated handheld"
        },
        {
            "platform_id": 184,
            "platform_name": "Didj"
        },
        {
            "platform_id": 72,
            "platform_name": "DoJa"
        },
        {
            "platform_id": 79,
            "platform_name": "Dragon 32/64"
        },
        {
            "platform_id": 8,
            "platform_name": "Dreamcast"
        },
        {
            "platform_id": 269,
            "platform_name": "ECD Micromind"
        },
        {
            "platform_id": 93,
            "platform_name": "Electron"
        },
        {
            "platform_id": 161,
            "platform_name": "Enterprise"
        },
        {
            "platform_id": 137,
            "platform_name": "Epoch Cassette Vision"
        },
        {
            "platform_id": 139,
            "platform_name": "Epoch Game Pocket Computer"
        },
        {
            "platform_id": 138,
            "platform_name": "Epoch Super Cassette Vision"
        },
        {
            "platform_id": 284,
            "platform_name": "Evercade"
        },
        {
            "platform_id": 70,
            "platform_name": "ExEn"
        },
        {
            "platform_id": 195,
            "platform_name": "Exelvision"
        },
        {
            "platform_id": 176,
            "platform_name": "Exidy Sorcerer"
        },
        {
            "platform_id": 102,
            "platform_name": "FM Towns"
        },
        {
            "platform_id": 126,
            "platform_name": "FM-7"
        },
        {
            "platform_id": 315,
            "platform_name": "Feature phone"
        },
        {
            "platform_id": 159,
            "platform_name": "Fire OS"
        },
        {
            "platform_id": 268,
            "platform_name": "Freebox"
        },
        {
            "platform_id": 302,
            "platform_name": "G-cluster"
        },
        {
            "platform_id": 251,
            "platform_name": "GIMINI"
        },
        {
            "platform_id": 258,
            "platform_name": "GNEX"
        },
        {
            "platform_id": 122,
            "platform_name": "GP2X"
        },
        {
            "platform_id": 123,
            "platform_name": "GP2X Wiz"
        },
        {
            "platform_id": 108,
            "platform_name": "GP32"
        },
        {
            "platform_id": 257,
            "platform_name": "GVM"
        },
        {
            "platform_id": 236,
            "platform_name": "Galaksija"
        },
        {
            "platform_id": 10,
            "platform_name": "Game Boy"
        },
        {
            "platform_id": 12,
            "platform_name": "Game Boy Advance"
        },
        {
            "platform_id": 11,
            "platform_name": "Game Boy Color"
        },
        {
            "platform_id": 25,
            "platform_name": "Game Gear"
        },
        {
            "platform_id": 104,
            "platform_name": "Game Wave"
        },
        {
            "platform_id": 50,
            "platform_name": "Game.Com"
        },
        {
            "platform_id": 14,
            "platform_name": "GameCube"
        },
        {
            "platform_id": 155,
            "platform_name": "GameStick"
        },
        {
            "platform_id": 16,
            "platform_name": "Genesis"
        },
        {
            "platform_id": 55,
            "platform_name": "Gizmondo"
        },
        {
            "platform_id": 292,
            "platform_name": "Gloud"
        },
        {
            "platform_id": 172,
            "platform_name": "Glulx"
        },
        {
            "platform_id": 167,
            "platform_name": "HD DVD Player"
        },
        {
            "platform_id": 219,
            "platform_name": "HP 9800"
        },
        {
            "platform_id": 234,
            "platform_name": "HP Programmable Calculator"
        },
        {
            "platform_id": 320,
            "platform_name": "HP Series 80"
        },
        {
            "platform_id": 262,
            "platform_name": "Heath/Zenith H8/H89"
        },
        {
            "platform_id": 248,
            "platform_name": "Heathkit H11"
        },
        {
            "platform_id": 274,
            "platform_name": "Hitachi S1"
        },
        {
            "platform_id": 170,
            "platform_name": "Hugo"
        },
        {
            "platform_id": 192,
            "platform_name": "HyperScan"
        },
        {
            "platform_id": 250,
            "platform_name": "IBM 5100"
        },
        {
            "platform_id": 252,
            "platform_name": "Ideal-Computer"
        },
        {
            "platform_id": 224,
            "platform_name": "Intel 8008"
        },
        {
            "platform_id": 225,
            "platform_name": "Intel 8080"
        },
        {
            "platform_id": 317,
            "platform_name": "Intel 8086 / 8088"
        },
        {
            "platform_id": 30,
            "platform_name": "Intellivision"
        },
        {
            "platform_id": 295,
            "platform_name": "Interact Model One"
        },
        {
            "platform_id": 221,
            "platform_name": "Interton Video 2000"
        },
        {
            "platform_id": 64,
            "platform_name": "J2ME"
        },
        {
            "platform_id": 17,
            "platform_name": "Jaguar"
        },
        {
            "platform_id": 247,
            "platform_name": "Jolt"
        },
        {
            "platform_id": 153,
            "platform_name": "Jupiter Ace"
        },
        {
            "platform_id": 226,
            "platform_name": "KIM-1"
        },
        {
            "platform_id": 313,
            "platform_name": "KaiOS"
        },
        {
            "platform_id": 145,
            "platform_name": "Kindle Classic"
        },
        {
            "platform_id": 264,
            "platform_name": "Laser 200"
        },
        {
            "platform_id": 163,
            "platform_name": "LaserActive"
        },
        {
            "platform_id": 185,
            "platform_name": "LeapFrog Explorer"
        },
        {
            "platform_id": 186,
            "platform_name": "LeapTV"
        },
        {
            "platform_id": 183,
            "platform_name": "Leapster"
        },
        {
            "platform_id": 1,
            "platform_name": "Linux"
        },
        {
            "platform_id": 297,
            "platform_name": "Luna"
        },
        {
            "platform_id": 18,
            "platform_name": "Lynx"
        },
        {
            "platform_id": 240,
            "platform_name": "MOS Technology 6502"
        },
        {
            "platform_id": 229,
            "platform_name": "MRE"
        },
        {
            "platform_id": 57,
            "platform_name": "MSX"
        },
        {
            "platform_id": 74,
            "platform_name": "Macintosh"
        },
        {
            "platform_id": 157,
            "platform_name": "Maemo"
        },
        {
            "platform_id": 322,
            "platform_name": "Magic Leap"
        },
        {
            "platform_id": 208,
            "platform_name": "Mainframe"
        },
        {
            "platform_id": 307,
            "platform_name": "Matsushita/Panasonic JR"
        },
        {
            "platform_id": 135,
            "platform_name": "Mattel Aquarius"
        },
        {
            "platform_id": 158,
            "platform_name": "MeeGo"
        },
        {
            "platform_id": 148,
            "platform_name": "Memotech MTX"
        },
        {
            "platform_id": 311,
            "platform_name": "Meritum"
        },
        {
            "platform_id": 200,
            "platform_name": "Microbee"
        },
        {
            "platform_id": 232,
            "platform_name": "Microtan 65"
        },
        {
            "platform_id": 97,
            "platform_name": "Microvision"
        },
        {
            "platform_id": 71,
            "platform_name": "Mophun"
        },
        {
            "platform_id": 235,
            "platform_name": "Motorola 6800"
        },
        {
            "platform_id": 275,
            "platform_name": "Motorola 68k"
        },
        {
            "platform_id": 32,
            "platform_name": "N-Gage"
        },
        {
            "platform_id": 89,
            "platform_name": "N-Gage (service)"
        },
        {
            "platform_id": 22,
            "platform_name": "NES"
        },
        {
            "platform_id": 175,
            "platform_name": "Nascom"
        },
        {
            "platform_id": 36,
            "platform_name": "Neo Geo"
        },
        {
            "platform_id": 54,
            "platform_name": "Neo Geo CD"
        },
        {
            "platform_id": 52,
            "platform_name": "Neo Geo Pocket"
        },
        {
            "platform_id": 53,
            "platform_name": "Neo Geo Pocket Color"
        },
        {
            "platform_id": 279,
            "platform_name": "Neo Geo X"
        },
        {
            "platform_id": 174,
            "platform_name": "New Nintendo 3DS"
        },
        {
            "platform_id": 177,
            "platform_name": "NewBrain"
        },
        {
            "platform_id": 207,
            "platform_name": "Newton"
        },
        {
            "platform_id": 101,
            "platform_name": "Nintendo 3DS"
        },
        {
            "platform_id": 9,
            "platform_name": "Nintendo 64"
        },
        {
            "platform_id": 44,
            "platform_name": "Nintendo DS"
        },
        {
            "platform_id": 87,
            "platform_name": "Nintendo DSi"
        },
        {
            "platform_id": 203,
            "platform_name": "Nintendo Switch"
        },
        {
            "platform_id": 266,
            "platform_name": "North Star"
        },
        {
            "platform_id": 244,
            "platform_name": "Noval 760"
        },
        {
            "platform_id": 116,
            "platform_name": "Nuon"
        },
        {
            "platform_id": 300,
            "platform_name": "OOParts"
        },
        {
            "platform_id": 146,
            "platform_name": "OS/2"
        },
        {
            "platform_id": 218,
            "platform_name": "Oculus Go"
        },
        {
            "platform_id": 75,
            "platform_name": "Odyssey"
        },
        {
            "platform_id": 78,
            "platform_name": "Odyssey 2"
        },
        {
            "platform_id": 178,
            "platform_name": "Ohio Scientific"
        },
        {
            "platform_id": 282,
            "platform_name": "OnLive"
        },
        {
            "platform_id": 270,
            "platform_name": "Orao"
        },
        {
            "platform_id": 111,
            "platform_name": "Oric"
        },
        {
            "platform_id": 144,
            "platform_name": "Ouya"
        },
        {
            "platform_id": 4,
            "platform_name": "PC Booter"
        },
        {
            "platform_id": 149,
            "platform_name": "PC-6001"
        },
        {
            "platform_id": 201,
            "platform_name": "PC-8000"
        },
        {
            "platform_id": 94,
            "platform_name": "PC-88"
        },
        {
            "platform_id": 95,
            "platform_name": "PC-98"
        },
        {
            "platform_id": 59,
            "platform_name": "PC-FX"
        },
        {
            "platform_id": 316,
            "platform_name": "PICO"
        },
        {
            "platform_id": 105,
            "platform_name": "PS Vita"
        },
        {
            "platform_id": 46,
            "platform_name": "PSP"
        },
        {
            "platform_id": 65,
            "platform_name": "Palm OS"
        },
        {
            "platform_id": 308,
            "platform_name": "Pandora"
        },
        {
            "platform_id": 304,
            "platform_name": "Pebble"
        },
        {
            "platform_id": 321,
            "platform_name": "Philips P2000"
        },
        {
            "platform_id": 133,
            "platform_name": "Philips VG 5000"
        },
        {
            "platform_id": 272,
            "platform_name": "Photo CD"
        },
        {
            "platform_id": 112,
            "platform_name": "Pippin"
        },
        {
            "platform_id": 6,
            "platform_name": "PlayStation"
        },
        {
            "platform_id": 7,
            "platform_name": "PlayStation 2"
        },
        {
            "platform_id": 81,
            "platform_name": "PlayStation 3"
        },
        {
            "platform_id": 141,
            "platform_name": "PlayStation 4"
        },
        {
            "platform_id": 288,
            "platform_name": "PlayStation 5"
        },
        {
            "platform_id": 294,
            "platform_name": "PlayStation Now"
        },
        {
            "platform_id": 303,
            "platform_name": "Playdate"
        },
        {
            "platform_id": 107,
            "platform_name": "Playdia"
        },
        {
            "platform_id": 291,
            "platform_name": "Plex Arcade"
        },
        {
            "platform_id": 230,
            "platform_name": "Pokitto"
        },
        {
            "platform_id": 152,
            "platform_name": "Pokémon Mini"
        },
        {
            "platform_id": 249,
            "platform_name": "Poly-88"
        },
        {
            "platform_id": 271,
            "platform_name": "Quest"
        },
        {
            "platform_id": 113,
            "platform_name": "RCA Studio II"
        },
        {
            "platform_id": 309,
            "platform_name": "Research Machines 380Z"
        },
        {
            "platform_id": 196,
            "platform_name": "Roku"
        },
        {
            "platform_id": 120,
            "platform_name": "SAM Coupé"
        },
        {
            "platform_id": 255,
            "platform_name": "SC/MP"
        },
        {
            "platform_id": 267,
            "platform_name": "SD-200/270/290"
        },
        {
            "platform_id": 21,
            "platform_name": "SEGA 32X"
        },
        {
            "platform_id": 20,
            "platform_name": "SEGA CD"
        },
        {
            "platform_id": 26,
            "platform_name": "SEGA Master System"
        },
        {
            "platform_id": 103,
            "platform_name": "SEGA Pico"
        },
        {
            "platform_id": 23,
            "platform_name": "SEGA Saturn"
        },
        {
            "platform_id": 114,
            "platform_name": "SG-1000"
        },
        {
            "platform_id": 259,
            "platform_name": "SK-VM"
        },
        {
            "platform_id": 273,
            "platform_name": "SMC-777"
        },
        {
            "platform_id": 15,
            "platform_name": "SNES"
        },
        {
            "platform_id": 242,
            "platform_name": "SRI-500/1000"
        },
        {
            "platform_id": 228,
            "platform_name": "SWTPC 6800"
        },
        {
            "platform_id": 182,
            "platform_name": "Sharp MZ-80B/2000/2500"
        },
        {
            "platform_id": 181,
            "platform_name": "Sharp MZ-80K/700/800/1500"
        },
        {
            "platform_id": 121,
            "platform_name": "Sharp X1"
        },
        {
            "platform_id": 106,
            "platform_name": "Sharp X68000"
        },
        {
            "platform_id": 202,
            "platform_name": "Sharp Zaurus"
        },
        {
            "platform_id": 278,
            "platform_name": "Signetics 2650"
        },
        {
            "platform_id": 131,
            "platform_name": "Sinclair QL"
        },
        {
            "platform_id": 190,
            "platform_name": "Socrates"
        },
        {
            "platform_id": 199,
            "platform_name": "Sol-20"
        },
        {
            "platform_id": 134,
            "platform_name": "Sord M5"
        },
        {
            "platform_id": 85,
            "platform_name": "Spectravideo"
        },
        {
            "platform_id": 281,
            "platform_name": "Stadia"
        },
        {
            "platform_id": 110,
            "platform_name": "Super A'can"
        },
        {
            "platform_id": 296,
            "platform_name": "Super Vision 8000"
        },
        {
            "platform_id": 127,
            "platform_name": "SuperGrafx"
        },
        {
            "platform_id": 109,
            "platform_name": "Supervision"
        },
        {
            "platform_id": 287,
            "platform_name": "Sure Shot HD"
        },
        {
            "platform_id": 67,
            "platform_name": "Symbian"
        },
        {
            "platform_id": 171,
            "platform_name": "TADS"
        },
        {
            "platform_id": 239,
            "platform_name": "TI Programmable Calculator"
        },
        {
            "platform_id": 47,
            "platform_name": "TI-99/4A"
        },
        {
            "platform_id": 246,
            "platform_name": "TIM"
        },
        {
            "platform_id": 58,
            "platform_name": "TRS-80"
        },
        {
            "platform_id": 62,
            "platform_name": "TRS-80 CoCo"
        },
        {
            "platform_id": 193,
            "platform_name": "TRS-80 MC-10"
        },
        {
            "platform_id": 312,
            "platform_name": "TRS-80 Model 100"
        },
        {
            "platform_id": 283,
            "platform_name": "Taito X-55"
        },
        {
            "platform_id": 150,
            "platform_name": "Tatung Einstein"
        },
        {
            "platform_id": 223,
            "platform_name": "Tektronix 4050"
        },
        {
            "platform_id": 220,
            "platform_name": "Tele-Spiel ES-2201"
        },
        {
            "platform_id": 233,
            "platform_name": "Telstar Arcade"
        },
        {
            "platform_id": 209,
            "platform_name": "Terminal"
        },
        {
            "platform_id": 147,
            "platform_name": "Thomson MO"
        },
        {
            "platform_id": 130,
            "platform_name": "Thomson TO"
        },
        {
            "platform_id": 263,
            "platform_name": "Tiki 100"
        },
        {
            "platform_id": 173,
            "platform_name": "Timex Sinclair 2068"
        },
        {
            "platform_id": 206,
            "platform_name": "Tizen"
        },
        {
            "platform_id": 256,
            "platform_name": "Tomahawk F1"
        },
        {
            "platform_id": 151,
            "platform_name": "Tomy Tutor"
        },
        {
            "platform_id": 310,
            "platform_name": "Triton"
        },
        {
            "platform_id": 45,
            "platform_name": "TurboGrafx CD"
        },
        {
            "platform_id": 40,
            "platform_name": "TurboGrafx-16"
        },
        {
            "platform_id": 189,
            "platform_name": "V.Flash"
        },
        {
            "platform_id": 42,
            "platform_name": "V.Smile"
        },
        {
            "platform_id": 43,
            "platform_name": "VIC-20"
        },
        {
            "platform_id": 164,
            "platform_name": "VIS"
        },
        {
            "platform_id": 37,
            "platform_name": "Vectrex"
        },
        {
            "platform_id": 299,
            "platform_name": "Versatile"
        },
        {
            "platform_id": 214,
            "platform_name": "VideoBrain"
        },
        {
            "platform_id": 128,
            "platform_name": "Videopac+ G7400"
        },
        {
            "platform_id": 38,
            "platform_name": "Virtual Boy"
        },
        {
            "platform_id": 260,
            "platform_name": "WIPI"
        },
        {
            "platform_id": 217,
            "platform_name": "Wang 2200"
        },
        {
            "platform_id": 82,
            "platform_name": "Wii"
        },
        {
            "platform_id": 132,
            "platform_name": "Wii U"
        },
        {
            "platform_id": 3,
            "platform_name": "Windows"
        },
        {
            "platform_id": 5,
            "platform_name": "Windows 3.x"
        },
        {
            "platform_id": 140,
            "platform_name": "Windows Apps"
        },
        {
            "platform_id": 66,
            "platform_name": "Windows Mobile"
        },
        {
            "platform_id": 98,
            "platform_name": "Windows Phone"
        },
        {
            "platform_id": 48,
            "platform_name": "WonderSwan"
        },
        {
            "platform_id": 49,
            "platform_name": "WonderSwan Color"
        },
        {
            "platform_id": 191,
            "platform_name": "XaviXPORT"
        },
        {
            "platform_id": 13,
            "platform_name": "Xbox"
        },
        {
            "platform_id": 69,
            "platform_name": "Xbox 360"
        },
        {
            "platform_id": 293,
            "platform_name": "Xbox Cloud Gaming"
        },
        {
            "platform_id": 142,
            "platform_name": "Xbox One"
        },
        {
            "platform_id": 289,
            "platform_name": "Xbox Series"
        },
        {
            "platform_id": 254,
            "platform_name": "Xerox Alto"
        },
        {
            "platform_id": 169,
            "platform_name": "Z-machine"
        },
        {
            "platform_id": 41,
            "platform_name": "ZX Spectrum"
        },
        {
            "platform_id": 280,
            "platform_name": "ZX Spectrum Next"
        },
        {
            "platform_id": 118,
            "platform_name": "ZX80"
        },
        {
            "platform_id": 119,
            "platform_name": "ZX81"
        },
        {
            "platform_id": 88,
            "platform_name": "Zeebo"
        },
        {
            "platform_id": 227,
            "platform_name": "Zilog Z80"
        },
        {
            "platform_id": 276,
            "platform_name": "Zilog Z8000"
        },
        {
            "platform_id": 68,
            "platform_name": "Zodiac"
        },
        {
            "platform_id": 211,
            "platform_name": "Zune"
        },
        {
            "platform_id": 99,
            "platform_name": "bada"
        },
        {
            "platform_id": 187,
            "platform_name": "digiBlast"
        },
        {
            "platform_id": 96,
            "platform_name": "iPad"
        },
        {
            "platform_id": 86,
            "platform_name": "iPhone"
        },
        {
            "platform_id": 80,
            "platform_name": "iPod Classic"
        },
        {
            "platform_id": 314,
            "platform_name": "iiRcade"
        },
        {
            "platform_id": 179,
            "platform_name": "tvOS"
        },
        {
            "platform_id": 323,
            "platform_name": "visionOS"
        },
        {
            "platform_id": 180,
            "platform_name": "watchOS"
        },
        {
            "platform_id": 100,
            "platform_name": "webOS"
        }
    ]
};

  gameName!: string;

  constructor(private db: SteamGridDbService, private moby:MobyGamesApiService){}

  getDatas() {
    this.moby.getDatasByGame(this.gameName);
  }

}
