/* eslint-disable prettier/prettier */
import { inject, injectable } from "tsyringe";

import { Specification } from "../../entities/Specification";
import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

@injectable()
class ListSpecificationUseCase {
    constructor(
        @inject(SpecificationRepository)
        private specificationsRepository: ISpecificationRepository
    ) { }

    async execute(): Promise<Specification[]> {
        const spec = await this.specificationsRepository.list();
        return spec;
    }
}

export { ListSpecificationUseCase };
