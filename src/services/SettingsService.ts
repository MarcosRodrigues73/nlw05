import { getCustomRepository, Repository } from "typeorm";
import { setting } from "../entities/Setting";
import { SettingsRepository } from "../repositories/SettingsRepository";


interface ISettingsCreate{
    chat: boolean;
    username: string
}

class SettingsService{

    private settingsRepository: Repository<setting>

    constructor() {

     this.settingsRepository = getCustomRepository(SettingsRepository);
        
    }

    async create({chat, username}: ISettingsCreate) {
        
        
        // valida se usuário existe
        const userAlreadyExists = await this.settingsRepository.findOne({
            username
        });

        if(userAlreadyExists) {
            throw new Error ("User Already Exists")
        }
      
        const settings =  this.settingsRepository.create({
              chat,
              username
          });
      
          await this.settingsRepository.save(settings);

           return settings;
    }

    async findByUsername (username: string) {
        const settings = await this.settingsRepository.findOne({
            username,
        });

        return settings;
    }

    async update(username: string, chat: boolean) {
        const settings = await this.settingsRepository.createQueryBuilder().
        update(Setting)
        .set({chat})
        .where("username = :username", {
            username,
        })
        .execute();
    }
}

export{SettingsService}