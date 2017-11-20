/**
 * Created by Zhiyuan Li on 2017/7/17.
 */
const MockData = require('./../models/mockDataModel');

function create(mockData, cb) {
    new MockData(mockData).save(cb);
}

module.exports.create = create;

function remove(id, cb) {
    MockData.remove({id: id}, cb);
}

module.exports.remove = remove;

function removeBySchemaId(id, cb) {
    MockData.remove({dataSchema: id}, cb);
}

module.exports.removeBySchemaId = removeBySchemaId;

function findById(id, cb) {
    MockData.findById(id, cb);
}

module.exports.findById = findById;

function findBySchemaId_preview(schemaId, cb) {
    MockData.findOne({dataSchema: schemaId}, {data: {$slice: 100}}).exec(cb);
}

module.exports.findBySchemaId_preview = findBySchemaId_preview;

function findBySchemaId(schemaId, cb) {
    MockData.findOne({dataSchema: schemaId}).populate('dataSchema').exec(cb);
}

module.exports.findBySchemaId = findBySchemaId;

function findDataBySchemaId(schemaId, cb) {
    MockData.findOne({dataSchema: schemaId}, 'data').exec(cb);
}

module.exports.findDataBySchemaId = findDataBySchemaId;

function findByUserId(userId, cb) {
    MockData.find({user: userId}, cb);
}

module.exports.findByUserId = findByUserId;

function removeDataByQuery(schemaId, query, cb) {
    MockData.findOneAndUpdate({dataSchema: schemaId}, {$pull: {data: query}}, {multi: true, new: true}, cb);
}

module.exports.removeDataByQuery = removeDataByQuery;

function updateDataByQuery(query, schemaId, row, cb) {
    const modifiedQuery = constructQuery(query, schemaId);
    const modifiedRow = constructUpdatedData(row);
    MockData.findOneAndUpdate(modifiedQuery, {$set: modifiedRow}, {multi: true, new: true}, cb)
}

module.exports.updateDataByQuery = updateDataByQuery;

function addData(schemaId, row, cb) {
    MockData.findOneAndUpdate({dataSchema: schemaId}, {$push: {data: row}}, {multi: true, new: true}, cb)
}

module.exports.addData = addData;

function constructQuery(query, schemaId) {
    const modifiedQuery = {};
    for (let name in query) {
        modifiedQuery['data.' + name] = query[name];
    }
    modifiedQuery.dataSchema = schemaId;
    return modifiedQuery;
}

function constructUpdatedData(row) {
    const modifiedRow = {};
    for (let name in row) {
        modifiedRow['data.$.' + name] = row[name];
    }
    return modifiedRow;
}