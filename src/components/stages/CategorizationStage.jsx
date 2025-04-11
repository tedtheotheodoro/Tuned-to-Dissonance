import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const CategorizationStage = ({ stage, userAnswers, onDragEnd }) => {
  const categories = Object.keys(stage.categories);
  const unassigned = stage.artists.filter(a => !userAnswers[a]);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-purple-300 mb-2">
          Drag each artist to the correct category:
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {categories.map((category) => (
            <Droppable droppableId={category} key={category}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="p-4 bg-gray-800 rounded-xl border border-gray-700 min-h-[100px]"
                >
                  <h4 className="text-lg font-medium mb-3 text-center">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(userAnswers)
                      .filter(([_, cat]) => cat === category)
                      .map(([artist], index) => (
                        <Draggable
                          key={artist}
                          draggableId={artist}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="px-3 py-1 bg-green-700 text-white rounded-full text-sm"
                            >
                              {artist}
                            </div>
                          )}
                        </Draggable>
                      ))}
                    {provided.placeholder}
                  </div>
                </div>
              )}
            </Droppable>
          ))}
        </div>

        <Droppable droppableId="unassigned">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="p-4 bg-gray-800 rounded-xl border border-gray-700"
            >
              <h4 className="text-lg font-medium mb-3">Unassigned Artists</h4>
              <div className="flex flex-wrap gap-2">
                {unassigned.map((artist, index) => (
                  <Draggable
                    key={artist}
                    draggableId={artist}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="px-3 py-1 bg-gray-600 text-white rounded-full text-sm"
                      >
                        {artist}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

CategorizationStage.propTypes = {
  stage: PropTypes.object.isRequired,
  userAnswers: PropTypes.object.isRequired,
  onDragEnd: PropTypes.func.isRequired
};

export default CategorizationStage;
